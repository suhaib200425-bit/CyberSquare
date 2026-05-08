import React, { useMemo } from "react";
import axios from "axios";
import * as Babel from "@babel/standalone";

import {
    useParams,
    useNavigate,
    useLocation
} from "react-router-dom";

import * as Icons from "react-icons/fa";

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
                presets: ["react"],
            }).code;

            return new Function(
                "React",
                "axios",
                "router",
                "Icons",
                `
                const {
                    useState,
                    useEffect,
                    useRef,
                    useMemo,
                    useCallback
                } = React;

                const {
                    useParams,
                    useNavigate,
                    useLocation
                } = router;

                const {
                    FaUser,
                    FaGoogle,
                    FaLock,
                    FaEnvelope
                } = Icons;

                ${compiled}

                return ${componentName};
                `
            )(
                React,
                axios,
                {
                    useParams,
                    useNavigate,
                    useLocation
                },
                Icons
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

    return <Component {...props} />;
};