

import { useQuery } from '@tanstack/react-query';
import React, { useMemo } from "react";
import axios from "axios";
import * as Babel from "@babel/standalone";
import * as ReactJSXRuntime from "react/jsx-runtime";
import * as ReactJSXDevRuntime from "react/jsx-dev-runtime";

import {
    useParams, useSearchParams,
    useNavigate,
    useLocation,
    Link
} from "react-router-dom";

import * as Icons from "react-icons/fa";
import useStore from "../context/Zustand";

import { BASEURL } from "../assets/assets";

function getFunctionName(code) {

    // function Test() {}
    const functionMatch = code.match(
        /function\s+([A-Za-z0-9_]+)/
    );

    if (functionMatch) {
        return functionMatch[1];
    }

    // const Test = () => {}
    const arrowMatch = code.match(
        /const\s+([A-Za-z0-9_]+)\s*=\s*\(/
    );

    if (arrowMatch) {
        return arrowMatch[1];
    }

    return null;
}

export const DynamicRenderer = ({ code, props }) => {

    const Component = useMemo(() => {

        try {

            const componentName = getFunctionName(code);

            if (!componentName) {
                throw new Error("Component name not found");
            }

            const fixedCode = code
                .replace(/\\u003C/g, "<")
                .replace(/\\u003E/g, ">");

            const compiled = Babel.transform(fixedCode, {
                presets: [
                    ["react", { runtime: "classic" }]
                ]
            }).code;
            // console.log(compiled);
            return new Function(
    "React",
    "ReactJSXRuntime",
    "ReactJSXDevRuntime",
    "axios",
    "router",
    "Icons",
    "useStore",
    "BASEURL",
    "reactQuery",
    `

    const {
        useParams,
        useSearchParams,
        useNavigate,
        useLocation,
        Link
    } = router;

    const {
        useQuery,
    } = reactQuery

    const {
        FaUser,
        FaGoogle,
        FaLock,
        FaEnvelope
    } = Icons;

    const { jsx, jsxs, Fragment } = ReactJSXRuntime;
    const { jsxDEV } = ReactJSXDevRuntime;

    const _jsxDEV = jsxDEV;
    const _jsxFileName = "DynamicComponent.jsx";

    const {
        useState,
        useEffect,
        useRef,
        useMemo,
        useCallback
    } = React;

    ${compiled}

    return ${componentName};
`
)(
    React,
    ReactJSXRuntime,
    ReactJSXDevRuntime,
    axios,
    {
        useParams,
        useSearchParams,
        useNavigate,
        useLocation,
        Link
    },
    Icons,
    useStore,
    BASEURL,
    {
        useQuery
    }
);

        } catch (err) {

            console.log(err);

            return null;
        }

    }, [code]);

    if (!Component) {

        return (
            <div className="text-red-500 p-4">
                Error rendering component
            </div>
        );
    }

    return <Component className="" {...props} />;
};