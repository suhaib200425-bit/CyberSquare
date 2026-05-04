import React, { useMemo } from "react";
import axios from "axios";
import * as Babel from "@babel/standalone";
import {
    useParams,
    useNavigate,
    useLocation
} from "react-router-dom";

function getFunctionName(code) {
    const match = code.match(/function\s+([A-Za-z0-9_]+)/);
    return match ? match[1] : null;
}

export const DynamicRenderer = ({ code, props }) => {

    const Component = useMemo(() => {
        try {

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
                `
                const { useState, useEffect } = React;

                const {
                    useParams,
                    useNavigate,
                    useLocation
                } = router;

                ${compiled}

                return ${getFunctionName(code)};
                `
            )(
                React,
                axios,
                {
                    useParams,
                    useNavigate,
                    useLocation
                }
            );

        } catch (err) {
            
            console.log(err);
            return null;
        }

    }, [code]);

    if (!Component) {
        return <div>Error component</div>;
    }

    return <Component {...props} />;
};