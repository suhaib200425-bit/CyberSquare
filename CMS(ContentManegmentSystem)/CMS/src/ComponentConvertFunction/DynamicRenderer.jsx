import React, { useMemo } from "react";
import axios from "axios";
import * as Babel from "@babel/standalone";

function getFunctionName(code) {
    const match = code.match(/function\s+([A-Za-z0-9_]+)/);
    return match ? match[1] : null;
}

export const DynamicRenderer = ({ code,props }) => {
    const Component = useMemo(() => {
        try {

            const fixedCode = code
                .replace(/\\u003C/g, "<")
                .replace(/\\u003E/g, ">")
                .replace(/`url\(\$\{(.*?)\}\)`/g, "'url(' + $1 + ')'");

            const compiled = Babel.transform(fixedCode, {
                presets: ["react"],
            }).code;

            return new Function(
                "React",
                "axios",
                `
          const { useState, useEffect } = React;
          ${compiled}
          return ${getFunctionName(code)};
        `
            )(React, axios);
        } catch (err) {
            console.log(err);
            return null;
        }
    }, [code]);

    if (!Component) return <div>Error component</div>;

    return <Component {...props} />;
};