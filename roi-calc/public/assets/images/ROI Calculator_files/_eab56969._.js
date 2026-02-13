(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/AppSnackbar/AppSnackbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppSnackbar",
    ()=>AppSnackbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$notistack$2f$notistack$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/notistack/notistack.esm.js [app-client] (ecmascript)");
'use client';
;
;
const AppSnackbar = (param)=>{
    let { children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$notistack$2f$notistack$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SnackbarProvider"], {
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right'
        },
        maxSnack: 3,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/AppSnackbar/AppSnackbar.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = AppSnackbar;
;
var _c;
__turbopack_context__.k.register(_c, "AppSnackbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/themes/sidebar/default.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sidebarTheme",
    ()=>sidebarTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js [app-client] (ecmascript)");
'use client';
;
const sidebarTheme = {
    // type: 'light',
    palette: {
        primary: {
            main: '#7352C7',
            light: '#A67FFB',
            dark: '#5E3BB7',
            contrastText: '#FFF'
        },
        secondary: {
            main: '#E44A77',
            light: '#FF7EA6',
            dark: '#DF295E',
            contrastText: '#FFF'
        },
        error: {
            main: '#E73145',
            light: '#FF6A70',
            dark: '#AD001E',
            contrastText: '#FFF'
        },
        warning: {
            main: '#F39711',
            light: '#FFC84C',
            dark: '#BB6900',
            contrastText: '#FFF'
        },
        info: {
            main: '#2EB5C9',
            light: '#6FE7FC',
            dark: '#008598',
            contrastText: '#FFF'
        },
        success: {
            main: '#3BD2A2',
            light: '#78FFD3',
            dark: '#00A073',
            contrastText: '#FFF'
        },
        text: {
            primary: '#475259',
            secondary: '#8595A6',
            disabled: '#A2B2C3'
        },
        divider: '#DEE2E6',
        background: {
            paper: '#FFFFFF',
            default: '#F5F7FA'
        },
        action: {
            active: '#475259',
            hover: '#F5F7FA'
        }
    },
    jumboComponents: {
        JumboNavbar: {
            nav: {
                action: {
                    active: '#7352C7',
                    hover: '#7352C7'
                },
                background: {
                    active: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])('#7352C7', 0.15),
                    hover: '#E9ECEF'
                },
                tick: {
                    active: '#7352C7',
                    hover: '#ADB5BD'
                }
            }
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/shared/components/Div/Div.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Div",
    ()=>Div
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/styles/styled.js [app-client] (ecmascript) <locals>");
'use client';
;
const Div = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])('div')({});
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboConfigProvider/JumboConfigContext.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JumboConfigContext",
    ()=>JumboConfigContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
const defaultContextValue = {
    LinkComponent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
};
const JumboConfigContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(defaultContextValue);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboConfigProvider/hooks/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useJumboConfig",
    ()=>useJumboConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboConfigProvider$2f$JumboConfigContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboConfigProvider/JumboConfigContext.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useJumboConfig() {
    _s();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboConfigProvider$2f$JumboConfigContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JumboConfigContext"]);
}
_s(useJumboConfig, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/shared/components/Link/Link.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Link",
    ()=>Link
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboConfigProvider$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboConfigProvider/hooks/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Link$2f$Link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Link/Link.js [app-client] (ecmascript) <export default as Link>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Link(props) {
    _s();
    const { LinkComponent } = (0, __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboConfigProvider$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboConfig"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Link$2f$Link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__["Link"], {
        component: LinkComponent,
        ...props
    }, void 0, false, {
        fileName: "[project]/@jumbo/shared/components/Link/Link.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
_s(Link, "DOfk8Dn2SmS4bRp1/IDr0B9WmwQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboConfigProvider$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboConfig"]
    ];
});
_c = Link;
;
var _c;
__turbopack_context__.k.register(_c, "Link");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/shared/components/Span/Span.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Span",
    ()=>Span
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/styles/styled.js [app-client] (ecmascript) <locals>");
'use client';
;
const Span = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])('span')({});
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboConfigProvider/JumboConfigProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JumboConfigProvider",
    ()=>JumboConfigProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboConfigProvider$2f$JumboConfigContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboConfigProvider/JumboConfigContext.ts [app-client] (ecmascript)");
'use client';
;
;
function JumboConfigProvider(param) {
    let { children, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboConfigProvider$2f$JumboConfigContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JumboConfigContext"].Provider, {
        value: {
            ...props
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/@jumbo/components/JumboConfigProvider/JumboConfigProvider.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = JumboConfigProvider;
;
var _c;
__turbopack_context__.k.register(_c, "JumboConfigProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboDdMenu/JumboDdMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JumboDdMenu",
    ()=>JumboDdMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$MoreHorizOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/MoreHorizOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/IconButton/IconButton.js [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemIcon$2f$ListItemIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/ListItemIcon/ListItemIcon.js [app-client] (ecmascript) <export default as ListItemIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/ListItemText/ListItemText.js [app-client] (ecmascript) <export default as ListItemText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Menu$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Menu/Menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/MenuItem/MenuItem.js [app-client] (ecmascript) <export default as MenuItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const JumboDdMenu = (param)=>{
    let { icon, menuItems, onClickCallback } = param;
    _s();
    const [menuEl, setMenuEl] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    const openMenu = Boolean(menuEl);
    const handleMenuItemClick = (option)=>{
        setMenuEl(null);
        if (typeof onClickCallback === 'function') onClickCallback(option);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                sx: {
                    color: 'inherit'
                },
                onClick: (event)=>{
                    setMenuEl(event.currentTarget);
                    event.stopPropagation();
                },
                children: icon ? icon : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$MoreHorizOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/@jumbo/components/JumboDdMenu/JumboDdMenu.tsx",
                    lineNumber: 37,
                    columnNumber: 24
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/@jumbo/components/JumboDdMenu/JumboDdMenu.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            (menuItems === null || menuItems === void 0 ? void 0 : menuItems.length) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Menu$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                open: openMenu,
                anchorEl: menuEl,
                onClose: ()=>setMenuEl(null),
                children: menuItems === null || menuItems === void 0 ? void 0 : menuItems.map((option, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                        selected: option.title === 'Refresh',
                        onClick: (e)=>{
                            handleMenuItemClick(option);
                            e.stopPropagation();
                        },
                        children: [
                            option.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemIcon$2f$ListItemIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemIcon$3e$__["ListItemIcon"], {
                                children: option.icon
                            }, void 0, false, {
                                fileName: "[project]/@jumbo/components/JumboDdMenu/JumboDdMenu.tsx",
                                lineNumber: 50,
                                columnNumber: 31
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__["ListItemText"], {
                                children: option.title
                            }, void 0, false, {
                                fileName: "[project]/@jumbo/components/JumboDdMenu/JumboDdMenu.tsx",
                                lineNumber: 52,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, index, true, {
                        fileName: "[project]/@jumbo/components/JumboDdMenu/JumboDdMenu.tsx",
                        lineNumber: 42,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/@jumbo/components/JumboDdMenu/JumboDdMenu.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(JumboDdMenu, "fm5yMWZGRfvrv5gNWL+ri3f1It8=");
_c = JumboDdMenu;
;
var _c;
__turbopack_context__.k.register(_c, "JumboDdMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/shared/components/Div/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$shared$2f$components$2f$Div$2f$Div$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/shared/components/Div/Div.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/shared/components/Link/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$shared$2f$components$2f$Link$2f$Link$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/shared/components/Link/Link.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/shared/components/Span/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$shared$2f$components$2f$Span$2f$Span$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/shared/components/Span/Span.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/shared/components/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$shared$2f$components$2f$Div$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/@jumbo/shared/components/Div/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$shared$2f$components$2f$Link$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/@jumbo/shared/components/Link/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$shared$2f$components$2f$Span$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/@jumbo/shared/components/Span/index.ts [app-client] (ecmascript) <locals>");
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/shared/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$shared$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/@jumbo/shared/components/index.ts [app-client] (ecmascript) <locals>");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboDdPopover/JumboDdPopover.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JumboDdPopover",
    ()=>JumboDdPopover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$shared$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/@jumbo/shared/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$shared$2f$components$2f$Span$2f$Span$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/shared/components/Span/Span.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Popover$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Popover/Popover.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const JumboDdPopover = (param)=>{
    let { triggerButton, children, sx } = param;
    _s();
    const [anchorEl, setAnchorEl] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    const isOpen = Boolean(anchorEl);
    const handleClick = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "JumboDdPopover.useCallback[handleClick]": (event)=>{
            setAnchorEl(event.currentTarget);
        }
    }["JumboDdPopover.useCallback[handleClick]"], []);
    const handleClose = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "JumboDdPopover.useCallback[handleClose]": ()=>{
            setAnchorEl(null);
        }
    }["JumboDdPopover.useCallback[handleClose]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$shared$2f$components$2f$Span$2f$Span$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Span"], {
                onClick: handleClick,
                sx: sx,
                children: triggerButton
            }, void 0, false, {
                fileName: "[project]/@jumbo/components/JumboDdPopover/JumboDdPopover.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Popover$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: isOpen,
                anchorEl: anchorEl,
                onClose: handleClose,
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'left'
                },
                sx: {
                    mt: 2,
                    mr: 6
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/@jumbo/components/JumboDdPopover/JumboDdPopover.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(JumboDdPopover, "LH2ewAzlCOEeeLpANxd5G8cpivs=");
_c = JumboDdPopover;
;
var _c;
__turbopack_context__.k.register(_c, "JumboDdPopover");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboDialog/JumboDialogContext.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
const defaultContext = {
    open: false,
    showDialog: ()=>{},
    hideDialog: ()=>{}
};
const JumboDialogContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(defaultContext);
const __TURBOPACK__default__export__ = JumboDialogContext;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboDialog/hooks/useJumboDialog.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useJumboDialog",
    ()=>useJumboDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboDialog$2f$JumboDialogContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboDialog/JumboDialogContext.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const useJumboDialog = ()=>{
    _s();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboDialog$2f$JumboDialogContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
};
_s(useJumboDialog, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboDialog/components/DialogBase/DialogBase.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboDialog$2f$hooks$2f$useJumboDialog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboDialog/hooks/useJumboDialog.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Dialog/Dialog.js [app-client] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/DialogActions/DialogActions.js [app-client] (ecmascript) <export default as DialogActions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/DialogContent/DialogContent.js [app-client] (ecmascript) <export default as DialogContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Zoom$2f$Zoom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zoom$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Zoom/Zoom.js [app-client] (ecmascript) <export default as Zoom>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CardHeader$2f$CardHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/CardHeader/CardHeader.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const DialogBase = (param)=>{
    let { content, actions, title, subheader, contentProps, headerActions, onClose, TransitionComponent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Zoom$2f$Zoom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zoom$3e$__["Zoom"], disableDefaultClose = false, ...restProps } = param;
    _s();
    const { open, hideDialog } = (0, __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboDialog$2f$hooks$2f$useJumboDialog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboDialog"])();
    const handleClose = ()=>{
        hideDialog();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
        open: open,
        ...restProps,
        onClose: handleClose,
        TransitionComponent: TransitionComponent,
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CardHeader$2f$CardHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: title,
                subheader: subheader,
                sx: {
                    pb: 0
                },
                action: headerActions
            }, void 0, false, {
                fileName: "[project]/@jumbo/components/JumboDialog/components/DialogBase/DialogBase.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__["DialogContent"], {
                ...contentProps,
                children: content
            }, void 0, false, {
                fileName: "[project]/@jumbo/components/JumboDialog/components/DialogBase/DialogBase.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            actions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__["DialogActions"], {
                children: actions
            }, void 0, false, {
                fileName: "[project]/@jumbo/components/JumboDialog/components/DialogBase/DialogBase.tsx",
                lineNumber: 39,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/@jumbo/components/JumboDialog/components/DialogBase/DialogBase.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(DialogBase, "13K52tMHJSWyaJ7Gfr2uiI9B5Uk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboDialog$2f$hooks$2f$useJumboDialog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboDialog"]
    ];
});
_c = DialogBase;
const __TURBOPACK__default__export__ = DialogBase;
var _c;
__turbopack_context__.k.register(_c, "DialogBase");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboDialog/components/DialogConfirm/DialogConfirm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DialogConfirm",
    ()=>DialogConfirm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Button/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboDialog$2f$hooks$2f$useJumboDialog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboDialog/hooks/useJumboDialog.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboDialog$2f$components$2f$DialogBase$2f$DialogBase$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboDialog/components/DialogBase/DialogBase.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const DialogConfirm = (param)=>{
    let { open = false, onYes, onNo, ...restProps } = param;
    _s();
    const { hideDialog } = (0, __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboDialog$2f$hooks$2f$useJumboDialog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboDialog"])();
    const handleClose = ()=>{
        onNo();
        hideDialog();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboDialog$2f$components$2f$DialogBase$2f$DialogBase$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        sx: {
            "& .MuiPaper-root": {
                borderRadius: 2
            }
        },
        fullWidth: true,
        maxWidth: "xs",
        actions: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    variant: "contained",
                    onClick: onYes,
                    children: "Yes"
                }, void 0, false, {
                    fileName: "[project]/@jumbo/components/JumboDialog/components/DialogConfirm/DialogConfirm.tsx",
                    lineNumber: 20,
                    columnNumber: 11
                }, void 0),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onClick: handleClose,
                    children: "No"
                }, void 0, false, {
                    fileName: "[project]/@jumbo/components/JumboDialog/components/DialogConfirm/DialogConfirm.tsx",
                    lineNumber: 23,
                    columnNumber: 11
                }, void 0)
            ]
        }, void 0, true),
        ...restProps
    }, void 0, false, {
        fileName: "[project]/@jumbo/components/JumboDialog/components/DialogConfirm/DialogConfirm.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(DialogConfirm, "HR5rNk7l56vJR0Zg0wWECKmGC1A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboDialog$2f$hooks$2f$useJumboDialog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboDialog"]
    ];
});
_c = DialogConfirm;
;
var _c;
__turbopack_context__.k.register(_c, "DialogConfirm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboDialog/components/DialogConfirm/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboDialog$2f$components$2f$DialogConfirm$2f$DialogConfirm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboDialog/components/DialogConfirm/DialogConfirm.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboDialog/components/DialogDefault/DialogDefault.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DialogDefault",
    ()=>DialogDefault
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboDialog$2f$components$2f$DialogBase$2f$DialogBase$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboDialog/components/DialogBase/DialogBase.tsx [app-client] (ecmascript)");
;
;
const DialogDefault = (param)=>{
    let { open = false, onClose, ...restProps } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboDialog$2f$components$2f$DialogBase$2f$DialogBase$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        sx: {
            "& .MuiPaper-root": {
                borderRadius: 2
            }
        },
        fullWidth: true,
        maxWidth: "xs",
        open: open,
        onClose: onClose,
        ...restProps
    }, void 0, false, {
        fileName: "[project]/@jumbo/components/JumboDialog/components/DialogDefault/DialogDefault.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = DialogDefault;
;
var _c;
__turbopack_context__.k.register(_c, "DialogDefault");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboDialog/components/DialogDefault/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboDialog$2f$components$2f$DialogDefault$2f$DialogDefault$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboDialog/components/DialogDefault/DialogDefault.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboDialog/JumboDialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JumboDialog",
    ()=>JumboDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboDialog$2f$components$2f$DialogConfirm$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboDialog/components/DialogConfirm/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboDialog$2f$components$2f$DialogConfirm$2f$DialogConfirm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboDialog/components/DialogConfirm/DialogConfirm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboDialog$2f$components$2f$DialogDefault$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboDialog/components/DialogDefault/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboDialog$2f$components$2f$DialogDefault$2f$DialogDefault$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboDialog/components/DialogDefault/DialogDefault.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboDialog$2f$hooks$2f$useJumboDialog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboDialog/hooks/useJumboDialog.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const dialogVariants = {
    default: __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboDialog$2f$components$2f$DialogDefault$2f$DialogDefault$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDefault"],
    confirm: __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboDialog$2f$components$2f$DialogConfirm$2f$DialogConfirm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogConfirm"]
};
const JumboDialog = ()=>{
    _s();
    const { variant, showDialog, hideDialog, ...restDialogProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboDialog$2f$hooks$2f$useJumboDialog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboDialog"])();
    const DialogVariant = variant ? dialogVariants[variant] : dialogVariants.default;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogVariant, {
        ...restDialogProps
    }, void 0, false, {
        fileName: "[project]/@jumbo/components/JumboDialog/JumboDialog.tsx",
        lineNumber: 19,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(JumboDialog, "yAXEMRFtkP+HoHoMf/ksjS/j2jE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboDialog$2f$hooks$2f$useJumboDialog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboDialog"]
    ];
});
_c = JumboDialog;
;
var _c;
__turbopack_context__.k.register(_c, "JumboDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboDialog/JumboDialogProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JumboDialogProvider",
    ()=>JumboDialogProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboDialog$2f$JumboDialogContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboDialog/JumboDialogContext.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const JumboDialogProvider = (param)=>{
    let { children } = param;
    _s();
    const [dialog, setDialog] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState({
        open: false
    });
    const showDialog = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "JumboDialogProvider.useCallback[showDialog]": (props)=>{
            setDialog({
                open: true,
                ...props
            });
        }
    }["JumboDialogProvider.useCallback[showDialog]"], [
        setDialog
    ]);
    const hideDialog = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "JumboDialogProvider.useCallback[hideDialog]": ()=>{
            setDialog({
                "JumboDialogProvider.useCallback[hideDialog]": (state)=>({
                        ...state,
                        open: false
                    })
            }["JumboDialogProvider.useCallback[hideDialog]"]);
        }
    }["JumboDialogProvider.useCallback[hideDialog]"], [
        setDialog
    ]);
    const dialogContextValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "JumboDialogProvider.useMemo[dialogContextValue]": ()=>({
                ...dialog,
                showDialog,
                hideDialog
            })
    }["JumboDialogProvider.useMemo[dialogContextValue]"], [
        dialog,
        hideDialog,
        showDialog
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboDialog$2f$JumboDialogContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: dialogContextValue,
        children: children
    }, void 0, false, {
        fileName: "[project]/@jumbo/components/JumboDialog/JumboDialogProvider.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(JumboDialogProvider, "CGzWnFlKaB4xertTi1iLtRHRndM=");
_c = JumboDialogProvider;
;
var _c;
__turbopack_context__.k.register(_c, "JumboDialogProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/utilities/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LAYOUT_ACTIONS",
    ()=>LAYOUT_ACTIONS,
    "LAYOUT_CONTAINER_STYLES",
    ()=>LAYOUT_CONTAINER_STYLES,
    "LAYOUT_DENSITIES",
    ()=>LAYOUT_DENSITIES,
    "POSITION_TYPES",
    ()=>POSITION_TYPES,
    "SIDEBAR_ANCHOR_POSITIONS",
    ()=>SIDEBAR_ANCHOR_POSITIONS,
    "SIDEBAR_SCROLL_TYPES",
    ()=>SIDEBAR_SCROLL_TYPES,
    "SIDEBAR_STYLES",
    ()=>SIDEBAR_STYLES,
    "SIDEBAR_VARIANTS",
    ()=>SIDEBAR_VARIANTS,
    "SIDEBAR_VIEWS",
    ()=>SIDEBAR_VIEWS
]);
var SIDEBAR_VARIANTS = /*#__PURE__*/ function(SIDEBAR_VARIANTS) {
    SIDEBAR_VARIANTS["TEMPORARY"] = "temporary";
    SIDEBAR_VARIANTS["PERSISTENT"] = "persistent";
    SIDEBAR_VARIANTS["PERMANENT"] = "permanent";
    return SIDEBAR_VARIANTS;
}({});
var SIDEBAR_STYLES = /*#__PURE__*/ function(SIDEBAR_STYLES) {
    SIDEBAR_STYLES["FULL_HEIGHT"] = "full-height";
    SIDEBAR_STYLES["CLIPPED_UNDER_HEADER"] = "clipped-under-header";
    return SIDEBAR_STYLES;
}({});
var SIDEBAR_SCROLL_TYPES = /*#__PURE__*/ function(SIDEBAR_SCROLL_TYPES) {
    SIDEBAR_SCROLL_TYPES["DEFAULT"] = "default";
    SIDEBAR_SCROLL_TYPES["FIXED"] = "fixed";
    return SIDEBAR_SCROLL_TYPES;
}({});
var SIDEBAR_ANCHOR_POSITIONS = /*#__PURE__*/ function(SIDEBAR_ANCHOR_POSITIONS) {
    SIDEBAR_ANCHOR_POSITIONS["LEFT"] = "left";
    SIDEBAR_ANCHOR_POSITIONS["RIGHT"] = "right";
    SIDEBAR_ANCHOR_POSITIONS["TOP"] = "top";
    SIDEBAR_ANCHOR_POSITIONS["BOTTOM"] = "bottom";
    return SIDEBAR_ANCHOR_POSITIONS;
}({});
var LAYOUT_DENSITIES = /*#__PURE__*/ function(LAYOUT_DENSITIES) {
    LAYOUT_DENSITIES["STANDARD"] = "standard";
    LAYOUT_DENSITIES["COMPACT"] = "compact";
    LAYOUT_DENSITIES["COMFORTABLE"] = "comfortable";
    return LAYOUT_DENSITIES;
}({});
var LAYOUT_CONTAINER_STYLES = /*#__PURE__*/ function(LAYOUT_CONTAINER_STYLES) {
    LAYOUT_CONTAINER_STYLES["FLUID"] = "fluid";
    LAYOUT_CONTAINER_STYLES["BOXED"] = "boxed";
    return LAYOUT_CONTAINER_STYLES;
}({});
var POSITION_TYPES = /*#__PURE__*/ function(POSITION_TYPES) {
    POSITION_TYPES["STICKY"] = "sticky";
    POSITION_TYPES["DEFAULT"] = "default";
    return POSITION_TYPES;
}({});
var SIDEBAR_VIEWS = /*#__PURE__*/ function(SIDEBAR_VIEWS) {
    SIDEBAR_VIEWS["MINI"] = "mini";
    SIDEBAR_VIEWS["FULL"] = "full";
    return SIDEBAR_VIEWS;
}({});
var LAYOUT_ACTIONS = /*#__PURE__*/ function(LAYOUT_ACTIONS) {
    LAYOUT_ACTIONS["SET_SIDEBAR_OPTIONS"] = "set-sidebar-options";
    LAYOUT_ACTIONS["SET_HEADER_OPTIONS"] = "set-header-options";
    LAYOUT_ACTIONS["SET_FOOTER_OPTIONS"] = "set-footer-options";
    LAYOUT_ACTIONS["SET_OPTIONS"] = "set-options";
    LAYOUT_ACTIONS["SET_RIGHT_SIDEBAR_OPTIONS"] = "right-side-options";
    LAYOUT_ACTIONS["SET_ROOT_OPTIONS"] = "set-root-options";
    LAYOUT_ACTIONS["SET_CONTENT_OPTIONS"] = "set-content-options";
    LAYOUT_ACTIONS["SET_WRAPPER_OPTIONS"] = "set-wrapper-options";
    LAYOUT_ACTIONS["SET_MAIN_OPTIONS"] = "set-main-options";
    return LAYOUT_ACTIONS;
}({});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboTheme/JumboThemeContext.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JumboThemeContext",
    ()=>JumboThemeContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__createTheme$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/styles/createTheme.js [app-client] (ecmascript) <locals> <export default as createTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$locale$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/locale/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
;
const defaultContextValue = {
    theme: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__createTheme$3e$__["createTheme"])(),
    muiLocale: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$locale$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enUS"],
    setTheme: ()=>null,
    setMuiLocale: ()=>null
};
const JumboThemeContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(defaultContextValue);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboTheme/components/JumboThemeFooter/JumboThemeFooterContext.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JumboThemeFooterContext",
    ()=>JumboThemeFooterContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__createTheme$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/styles/createTheme.js [app-client] (ecmascript) <locals> <export default as createTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
const defaultContextValue = {
    footerTheme: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__createTheme$3e$__["createTheme"])({}),
    setFooterTheme: ()=>null
};
const JumboThemeFooterContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(defaultContextValue);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboTheme/components/JumboThemeFooter/JumboThemeFooter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JumboThemeFooter",
    ()=>JumboThemeFooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__createTheme$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/styles/createTheme.js [app-client] (ecmascript) <locals> <export default as createTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$components$2f$JumboThemeFooter$2f$JumboThemeFooterContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboTheme/components/JumboThemeFooter/JumboThemeFooterContext.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const JumboThemeFooter = (param)=>{
    let { children, init } = param;
    _s();
    //todo: we can setup a default theme for footer here instead of {}
    const [footerTheme, setFooterTheme] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(init !== null && init !== void 0 ? init : {});
    const themeFooterContextValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "JumboThemeFooter.useMemo[themeFooterContextValue]": ()=>({
                footerTheme: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__createTheme$3e$__["createTheme"])(footerTheme),
                setFooterTheme: setFooterTheme
            })
    }["JumboThemeFooter.useMemo[themeFooterContextValue]"], [
        footerTheme,
        setFooterTheme
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$components$2f$JumboThemeFooter$2f$JumboThemeFooterContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JumboThemeFooterContext"].Provider, {
        value: themeFooterContextValue,
        children: children
    }, void 0, false, {
        fileName: "[project]/@jumbo/components/JumboTheme/components/JumboThemeFooter/JumboThemeFooter.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(JumboThemeFooter, "889UhYIUiAb7Gh+mpavlVKMTcQY=");
_c = JumboThemeFooter;
;
var _c;
__turbopack_context__.k.register(_c, "JumboThemeFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboTheme/components/JumboThemeFooter/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$components$2f$JumboThemeFooter$2f$JumboThemeFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboTheme/components/JumboThemeFooter/JumboThemeFooter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$components$2f$JumboThemeFooter$2f$JumboThemeFooterContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboTheme/components/JumboThemeFooter/JumboThemeFooterContext.ts [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboTheme/components/JumboThemeHeader/JumboThemeHeaderContext.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JumboThemeHeaderContext",
    ()=>JumboThemeHeaderContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__createTheme$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/styles/createTheme.js [app-client] (ecmascript) <locals> <export default as createTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
const defaultContextValue = {
    headerTheme: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__createTheme$3e$__["createTheme"])({}),
    setHeaderTheme: ()=>null
};
const JumboThemeHeaderContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(defaultContextValue);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboTheme/components/JumboThemeHeader/JumboThemeHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JumboThemeHeader",
    ()=>JumboThemeHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__createTheme$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/styles/createTheme.js [app-client] (ecmascript) <locals> <export default as createTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$components$2f$JumboThemeHeader$2f$JumboThemeHeaderContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboTheme/components/JumboThemeHeader/JumboThemeHeaderContext.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const JumboThemeHeader = (param)=>{
    let { children, init } = param;
    _s();
    //todo: later we can set a default theme for header here instead of {}
    const [headerTheme, setHeaderTheme] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(init !== null && init !== void 0 ? init : {});
    const themeHeaderContextValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "JumboThemeHeader.useMemo[themeHeaderContextValue]": ()=>({
                headerTheme: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__createTheme$3e$__["createTheme"])(headerTheme),
                setHeaderTheme: setHeaderTheme
            })
    }["JumboThemeHeader.useMemo[themeHeaderContextValue]"], [
        headerTheme,
        setHeaderTheme
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$components$2f$JumboThemeHeader$2f$JumboThemeHeaderContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JumboThemeHeaderContext"].Provider, {
        value: themeHeaderContextValue,
        children: children
    }, void 0, false, {
        fileName: "[project]/@jumbo/components/JumboTheme/components/JumboThemeHeader/JumboThemeHeader.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(JumboThemeHeader, "S5c7BlN1ISkSmmUU3mWZfsamXHM=");
_c = JumboThemeHeader;
;
var _c;
__turbopack_context__.k.register(_c, "JumboThemeHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboTheme/components/JumboThemeHeader/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$components$2f$JumboThemeHeader$2f$JumboThemeHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboTheme/components/JumboThemeHeader/JumboThemeHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$components$2f$JumboThemeHeader$2f$JumboThemeHeaderContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboTheme/components/JumboThemeHeader/JumboThemeHeaderContext.ts [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboTheme/components/JumboThemeSidebar/JumboThemeSidebarContext.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JumboThemeSidebarContext",
    ()=>JumboThemeSidebarContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__createTheme$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/styles/createTheme.js [app-client] (ecmascript) <locals> <export default as createTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
const defaultContextValue = {
    sidebarTheme: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__createTheme$3e$__["createTheme"])({}),
    setSidebarTheme: ()=>null
};
const JumboThemeSidebarContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(defaultContextValue);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboTheme/components/JumboThemeSidebar/JumboThemeSidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JumboThemeSidebar",
    ()=>JumboThemeSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__createTheme$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/styles/createTheme.js [app-client] (ecmascript) <locals> <export default as createTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$components$2f$JumboThemeSidebar$2f$JumboThemeSidebarContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboTheme/components/JumboThemeSidebar/JumboThemeSidebarContext.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const JumboThemeSidebar = (param)=>{
    let { children, init } = param;
    _s();
    //todo: we can setup a default theme for sidebar here instead of {}
    const [sidebarTheme, setSidebarTheme] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(init !== null && init !== void 0 ? init : {});
    const themeSidebarContextValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "JumboThemeSidebar.useMemo[themeSidebarContextValue]": ()=>({
                sidebarTheme: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__createTheme$3e$__["createTheme"])(sidebarTheme),
                setSidebarTheme: setSidebarTheme
            })
    }["JumboThemeSidebar.useMemo[themeSidebarContextValue]"], [
        sidebarTheme,
        setSidebarTheme
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$components$2f$JumboThemeSidebar$2f$JumboThemeSidebarContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JumboThemeSidebarContext"].Provider, {
        value: themeSidebarContextValue,
        children: children
    }, void 0, false, {
        fileName: "[project]/@jumbo/components/JumboTheme/components/JumboThemeSidebar/JumboThemeSidebar.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(JumboThemeSidebar, "xgZQXX20erBscVxsvHf1uMfd/OQ=");
_c = JumboThemeSidebar;
;
var _c;
__turbopack_context__.k.register(_c, "JumboThemeSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboTheme/components/JumboThemeSidebar/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$components$2f$JumboThemeSidebar$2f$JumboThemeSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboTheme/components/JumboThemeSidebar/JumboThemeSidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$components$2f$JumboThemeSidebar$2f$JumboThemeSidebarContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboTheme/components/JumboThemeSidebar/JumboThemeSidebarContext.ts [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboTheme/components/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$components$2f$JumboThemeFooter$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboTheme/components/JumboThemeFooter/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$components$2f$JumboThemeHeader$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboTheme/components/JumboThemeHeader/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$components$2f$JumboThemeSidebar$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboTheme/components/JumboThemeSidebar/index.ts [app-client] (ecmascript) <locals>");
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboTheme/hooks/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useJumboFooterTheme",
    ()=>useJumboFooterTheme,
    "useJumboHeaderTheme",
    ()=>useJumboHeaderTheme,
    "useJumboSidebarTheme",
    ()=>useJumboSidebarTheme,
    "useJumboTheme",
    ()=>useJumboTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$JumboThemeContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboTheme/JumboThemeContext.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboTheme/components/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$components$2f$JumboThemeFooter$2f$JumboThemeFooterContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboTheme/components/JumboThemeFooter/JumboThemeFooterContext.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$components$2f$JumboThemeHeader$2f$JumboThemeHeaderContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboTheme/components/JumboThemeHeader/JumboThemeHeaderContext.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$components$2f$JumboThemeSidebar$2f$JumboThemeSidebarContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboTheme/components/JumboThemeSidebar/JumboThemeSidebarContext.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
'use client';
;
;
;
function useJumboHeaderTheme() {
    _s();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$components$2f$JumboThemeHeader$2f$JumboThemeHeaderContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JumboThemeHeaderContext"]);
}
_s(useJumboHeaderTheme, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
function useJumboFooterTheme() {
    _s1();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$components$2f$JumboThemeFooter$2f$JumboThemeFooterContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JumboThemeFooterContext"]);
}
_s1(useJumboFooterTheme, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
function useJumboSidebarTheme() {
    _s2();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$components$2f$JumboThemeSidebar$2f$JumboThemeSidebarContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JumboThemeSidebarContext"]);
}
_s2(useJumboSidebarTheme, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
function useJumboTheme() {
    _s3();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$JumboThemeContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JumboThemeContext"]);
}
_s3(useJumboTheme, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboLayout/components/JumboLayoutProvider/JumboLayoutContext.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JumboLayoutContext",
    ()=>JumboLayoutContext,
    "defaultLayoutContext",
    ()=>defaultLayoutContext,
    "defaultLayoutOptions",
    ()=>defaultLayoutOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/utilities/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
const defaultLayoutOptions = {
    header: {
        hide: false,
        fixed: true,
        plain: false
    },
    sidebar: {
        open: true,
        hide: false,
        width: 240,
        minWidth: 80,
        variant: __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIDEBAR_VARIANTS"].PERSISTENT,
        anchor: __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIDEBAR_ANCHOR_POSITIONS"].LEFT,
        scrollType: __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIDEBAR_SCROLL_TYPES"].FIXED,
        style: __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIDEBAR_STYLES"].FULL_HEIGHT,
        view: __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIDEBAR_VIEWS"].FULL,
        drawer: true,
        plain: false
    },
    footer: {
        hide: false
    },
    root: {},
    content: {},
    wrapper: {},
    main: {}
};
const defaultLayoutContext = {
    layoutOptions: defaultLayoutOptions,
    headerOptions: defaultLayoutOptions.header,
    sidebarOptions: defaultLayoutOptions.sidebar,
    footerOptions: defaultLayoutOptions.footer,
    rootOptions: defaultLayoutOptions.root,
    contentOptions: defaultLayoutOptions.content,
    wrapperOptions: defaultLayoutOptions.wrapper,
    mainOptions: defaultLayoutOptions.main,
    setMainOptions: ()=>{},
    setSidebarOptions: ()=>{},
    setRootOptions: ()=>{},
    setContentOptions: ()=>{},
    setFooterOptions: ()=>{},
    setOptions: ()=>{},
    setHeaderOptions: ()=>{},
    setWrapperOptions: ()=>{}
};
const JumboLayoutContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(defaultLayoutContext);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboLayout/hooks/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAppBarSx",
    ()=>useAppBarSx,
    "useContentMargin",
    ()=>useContentMargin,
    "useDrawerVariant",
    ()=>useDrawerVariant,
    "useHeaderMargin",
    ()=>useHeaderMargin,
    "useHeaderSpaceSx",
    ()=>useHeaderSpaceSx,
    "useJumboLayout",
    ()=>useJumboLayout,
    "useSidebarDrawerHandlers",
    ()=>useSidebarDrawerHandlers,
    "useSidebarDrawerSx",
    ()=>useSidebarDrawerSx,
    "useSidebarState",
    ()=>useSidebarState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboTheme/hooks/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/utilities/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboLayout/components/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$components$2f$JumboLayoutProvider$2f$JumboLayoutContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboLayout/components/JumboLayoutProvider/JumboLayoutContext.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function useJumboLayout() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$components$2f$JumboLayoutProvider$2f$JumboLayoutContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JumboLayoutContext"]);
}
_s(useJumboLayout, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
function useSidebarDrawerHandlers() {
    _s1();
    const { sidebarOptions, setSidebarOptions } = useJumboLayout();
    const handleClose = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "useSidebarDrawerHandlers.useCallback[handleClose]": ()=>{
            if (setSidebarOptions) {
                setSidebarOptions({
                    open: false
                });
            }
        }
    }["useSidebarDrawerHandlers.useCallback[handleClose]"], [
        setSidebarOptions
    ]);
    const handleMouseEnter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "useSidebarDrawerHandlers.useCallback[handleMouseEnter]": ()=>{
            if ((sidebarOptions === null || sidebarOptions === void 0 ? void 0 : sidebarOptions.view) === __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIDEBAR_VIEWS"].MINI) {
                if (setSidebarOptions) {
                    setSidebarOptions({
                        variant: __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIDEBAR_VARIANTS"].PERSISTENT,
                        open: true
                    });
                }
            }
        }
    }["useSidebarDrawerHandlers.useCallback[handleMouseEnter]"], [
        sidebarOptions === null || sidebarOptions === void 0 ? void 0 : sidebarOptions.view,
        setSidebarOptions
    ]);
    const handleMouseLeave = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "useSidebarDrawerHandlers.useCallback[handleMouseLeave]": ()=>{
            if ((sidebarOptions === null || sidebarOptions === void 0 ? void 0 : sidebarOptions.view) === __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIDEBAR_VIEWS"].MINI && setSidebarOptions) {
                setSidebarOptions({
                    variant: __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIDEBAR_VARIANTS"].PERMANENT,
                    open: false
                });
            }
        }
    }["useSidebarDrawerHandlers.useCallback[handleMouseLeave]"], [
        sidebarOptions === null || sidebarOptions === void 0 ? void 0 : sidebarOptions.view,
        setSidebarOptions
    ]);
    return {
        handleClose,
        handleMouseEnter,
        handleMouseLeave
    };
}
_s1(useSidebarDrawerHandlers, "Bf5bG1J6JjkxgzjqVoTUWTs/kZU=", false, function() {
    return [
        useJumboLayout
    ];
});
function useSidebarDrawerSx() {
    var _sidebarTheme_sidebar;
    _s2();
    const { sidebarOptions } = useJumboLayout();
    const { sidebarTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboSidebarTheme"])();
    const sx = {
        '& .MuiDrawer-paper': {
            border: 'none',
            boxShadow: 23,
            transition: (theme)=>theme.transitions.create([
                    'width'
                ]),
            width: (sidebarOptions === null || sidebarOptions === void 0 ? void 0 : sidebarOptions.view) === __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIDEBAR_VIEWS"].MINI && !sidebarOptions.open ? sidebarOptions === null || sidebarOptions === void 0 ? void 0 : sidebarOptions.minWidth : sidebarOptions === null || sidebarOptions === void 0 ? void 0 : sidebarOptions.width,
            ...((_sidebarTheme_sidebar = sidebarTheme.sidebar) === null || _sidebarTheme_sidebar === void 0 ? void 0 : _sidebarTheme_sidebar.bgimage) ? {
                background: "url(".concat(sidebarTheme.sidebar.bgimage, ") no-repeat center"),
                backgroundSize: 'cover'
            } : {}
        }
    };
    return sx;
}
_s2(useSidebarDrawerSx, "azeWzquiMmy7fuSpoffw4gxR+6c=", false, function() {
    return [
        useJumboLayout,
        __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboSidebarTheme"]
    ];
});
function useDrawerVariant() {
    _s3();
    const { sidebarOptions } = useJumboLayout();
    return (sidebarOptions === null || sidebarOptions === void 0 ? void 0 : sidebarOptions.view) === __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIDEBAR_VIEWS"].MINI && (sidebarOptions === null || sidebarOptions === void 0 ? void 0 : sidebarOptions.open) ? __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIDEBAR_VARIANTS"].TEMPORARY : sidebarOptions === null || sidebarOptions === void 0 ? void 0 : sidebarOptions.variant;
}
_s3(useDrawerVariant, "+T1UUcYg5cXZBpxp/p+apPWBLWs=", false, function() {
    return [
        useJumboLayout
    ];
});
function useHeaderSpaceSx() {
    _s4();
    const { headerOptions } = useJumboLayout();
    const headerHeightProps = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useHeaderSpaceSx.useMemo[headerHeightProps]": ()=>{
            var _headerOptions_height;
            return {
                height: (_headerOptions_height = headerOptions.height) !== null && _headerOptions_height !== void 0 ? _headerOptions_height : 80
            };
        }
    }["useHeaderSpaceSx.useMemo[headerHeightProps]"], [
        headerOptions.height
    ]);
    return headerHeightProps;
}
_s4(useHeaderSpaceSx, "hT+rX2iYLEiEWRcVsiR0t8AkLFc=", false, function() {
    return [
        useJumboLayout
    ];
});
function useContentMargin() {
    _s5();
    const { sidebarOptions } = useJumboLayout();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useContentMargin.useMemo": ()=>{
            if ((sidebarOptions === null || sidebarOptions === void 0 ? void 0 : sidebarOptions.variant) === __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIDEBAR_VARIANTS"].TEMPORARY) {
                return 0;
            } else {
                if ((sidebarOptions === null || sidebarOptions === void 0 ? void 0 : sidebarOptions.view) === __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIDEBAR_VIEWS"].MINI) {
                    return sidebarOptions === null || sidebarOptions === void 0 ? void 0 : sidebarOptions.minWidth;
                } else {
                    if ((sidebarOptions === null || sidebarOptions === void 0 ? void 0 : sidebarOptions.style) === __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIDEBAR_STYLES"].FULL_HEIGHT || (sidebarOptions === null || sidebarOptions === void 0 ? void 0 : sidebarOptions.style) === __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIDEBAR_STYLES"].CLIPPED_UNDER_HEADER) {
                        return (sidebarOptions === null || sidebarOptions === void 0 ? void 0 : sidebarOptions.open) ? sidebarOptions === null || sidebarOptions === void 0 ? void 0 : sidebarOptions.width : 0;
                    }
                    return 0;
                }
            }
        }
    }["useContentMargin.useMemo"], [
        sidebarOptions === null || sidebarOptions === void 0 ? void 0 : sidebarOptions.open,
        sidebarOptions === null || sidebarOptions === void 0 ? void 0 : sidebarOptions.width,
        sidebarOptions === null || sidebarOptions === void 0 ? void 0 : sidebarOptions.minWidth,
        sidebarOptions === null || sidebarOptions === void 0 ? void 0 : sidebarOptions.view,
        sidebarOptions === null || sidebarOptions === void 0 ? void 0 : sidebarOptions.style,
        sidebarOptions === null || sidebarOptions === void 0 ? void 0 : sidebarOptions.variant
    ]);
}
_s5(useContentMargin, "lt6kZu4bZdo0qIMadaieKr51fYk=", false, function() {
    return [
        useJumboLayout
    ];
});
function useHeaderMargin() {
    _s6();
    const { headerOptions, sidebarOptions } = useJumboLayout();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useHeaderMargin.useMemo": ()=>{
            if (!headerOptions.fixed) {
                return 0;
            }
            if ((sidebarOptions === null || sidebarOptions === void 0 ? void 0 : sidebarOptions.variant) === __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIDEBAR_VARIANTS"].TEMPORARY) {
                return 0;
            } else {
                if ((sidebarOptions === null || sidebarOptions === void 0 ? void 0 : sidebarOptions.view) === __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIDEBAR_VIEWS"].MINI) {
                    return sidebarOptions === null || sidebarOptions === void 0 ? void 0 : sidebarOptions.minWidth;
                } else {
                    if ((sidebarOptions === null || sidebarOptions === void 0 ? void 0 : sidebarOptions.style) === __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIDEBAR_STYLES"].FULL_HEIGHT) {
                        return (sidebarOptions === null || sidebarOptions === void 0 ? void 0 : sidebarOptions.open) ? sidebarOptions === null || sidebarOptions === void 0 ? void 0 : sidebarOptions.width : 0;
                    }
                    return 0;
                }
            }
        }
    }["useHeaderMargin.useMemo"], [
        sidebarOptions === null || sidebarOptions === void 0 ? void 0 : sidebarOptions.open,
        sidebarOptions === null || sidebarOptions === void 0 ? void 0 : sidebarOptions.width,
        sidebarOptions === null || sidebarOptions === void 0 ? void 0 : sidebarOptions.minWidth,
        sidebarOptions === null || sidebarOptions === void 0 ? void 0 : sidebarOptions.view,
        sidebarOptions === null || sidebarOptions === void 0 ? void 0 : sidebarOptions.style,
        sidebarOptions === null || sidebarOptions === void 0 ? void 0 : sidebarOptions.variant,
        headerOptions === null || headerOptions === void 0 ? void 0 : headerOptions.fixed
    ]);
}
_s6(useHeaderMargin, "VdkAak6HFPeMHEODIz1GuGKAB4U=", false, function() {
    return [
        useJumboLayout
    ];
});
function useAppBarSx() {
    _s7();
    const { sidebarOptions, headerOptions } = useJumboLayout();
    const headerMarginLeft = useHeaderMargin();
    const appBarSx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useAppBarSx.useMemo[appBarSx]": ()=>{
            //TODO: code cleaning - need to learn how to destructure two SxProps to combine into one
            if (headerOptions === null || headerOptions === void 0 ? void 0 : headerOptions.sx) {
                return {
                    ...headerOptions.sx,
                    width: {
                        sm: "calc(100% - ".concat(headerMarginLeft, "px)")
                    },
                    ml: {
                        sm: "".concat(headerMarginLeft, "px")
                    },
                    transition: ({
                        "useAppBarSx.useMemo[appBarSx]": (theme)=>theme.transitions.create([
                                'width'
                            ])
                    })["useAppBarSx.useMemo[appBarSx]"],
                    zIndex: ({
                        "useAppBarSx.useMemo[appBarSx]": (theme)=>(sidebarOptions === null || sidebarOptions === void 0 ? void 0 : sidebarOptions.variant) === __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIDEBAR_VARIANTS"].TEMPORARY || (sidebarOptions === null || sidebarOptions === void 0 ? void 0 : sidebarOptions.style) === __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIDEBAR_STYLES"].FULL_HEIGHT ? theme.zIndex.drawer - 1 : theme.zIndex.drawer + 1
                    })["useAppBarSx.useMemo[appBarSx]"]
                };
            } else {
                return {
                    width: {
                        sm: "calc(100% - ".concat(headerMarginLeft, "px)")
                    },
                    ml: {
                        sm: "".concat(headerMarginLeft, "px")
                    },
                    transition: ({
                        "useAppBarSx.useMemo[appBarSx]": (theme)=>theme.transitions.create([
                                'width'
                            ])
                    })["useAppBarSx.useMemo[appBarSx]"],
                    zIndex: ({
                        "useAppBarSx.useMemo[appBarSx]": (theme)=>(sidebarOptions === null || sidebarOptions === void 0 ? void 0 : sidebarOptions.variant) === __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIDEBAR_VARIANTS"].TEMPORARY || (sidebarOptions === null || sidebarOptions === void 0 ? void 0 : sidebarOptions.style) === __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIDEBAR_STYLES"].FULL_HEIGHT ? theme.zIndex.drawer - 1 : theme.zIndex.drawer + 1
                    })["useAppBarSx.useMemo[appBarSx]"]
                };
            }
        }
    }["useAppBarSx.useMemo[appBarSx]"], [
        headerMarginLeft,
        sidebarOptions,
        headerOptions.sx
    ]);
    return appBarSx;
}
_s7(useAppBarSx, "8UCkmHhsshiBrxbTyIikA3NMFaU=", false, function() {
    return [
        useJumboLayout,
        useHeaderMargin
    ];
});
function useSidebarState() {
    _s8();
    const { sidebarOptions } = useJumboLayout();
    const stateFunctions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useSidebarState.useMemo[stateFunctions]": ()=>{
            function isSidebarStyle(style) {
                return sidebarOptions.style === style;
            }
            function isSidebarVariant(variant) {
                return sidebarOptions.variant === variant;
            }
            function isSidebarOpen() {
                var _sidebarOptions_open;
                return (_sidebarOptions_open = sidebarOptions.open) !== null && _sidebarOptions_open !== void 0 ? _sidebarOptions_open : false;
            }
            function isSidebarCollapsible() {
                return isSidebarStyle(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIDEBAR_STYLES"].CLIPPED_UNDER_HEADER) || isSidebarVariant(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIDEBAR_VARIANTS"].TEMPORARY) || isSidebarVariant(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIDEBAR_VARIANTS"].PERSISTENT) && !isSidebarOpen();
            }
            function isMiniAndClosed() {
                return (sidebarOptions === null || sidebarOptions === void 0 ? void 0 : sidebarOptions.view) === __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIDEBAR_VIEWS"].MINI && !(sidebarOptions === null || sidebarOptions === void 0 ? void 0 : sidebarOptions.open);
            }
            return {
                isSidebarStyle,
                isSidebarOpen,
                isSidebarVariant,
                isSidebarCollapsible,
                isMiniAndClosed
            };
        }
    }["useSidebarState.useMemo[stateFunctions]"], [
        sidebarOptions.open,
        sidebarOptions.variant,
        sidebarOptions.style,
        sidebarOptions.view
    ]);
    return stateFunctions;
}
_s8(useSidebarState, "HYFLbvbEM44xXwvXK67nXvpaWbI=", false, function() {
    return [
        useJumboLayout
    ];
});
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboLayout/components/JumboLayoutFooter/JumboLayoutFooter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JumboLayoutFooter",
    ()=>JumboLayoutFooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboTheme/hooks/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/styles/ThemeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboLayout/hooks/index.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function JumboLayoutFooter(param) {
    let { children } = param;
    _s();
    const { footerTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboFooterTheme"])();
    const { footerOptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboLayout"])();
    if (footerOptions === null || footerOptions === void 0 ? void 0 : footerOptions.hide) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        theme: footerTheme,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            className: "CmtLayout-footer",
            children: children
        }, void 0, false, {
            fileName: "[project]/@jumbo/components/JumboLayout/components/JumboLayoutFooter/JumboLayoutFooter.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/@jumbo/components/JumboLayout/components/JumboLayoutFooter/JumboLayoutFooter.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(JumboLayoutFooter, "JajUddsjHch8wfwrB2f9SQyw4dc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboFooterTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboLayout"]
    ];
});
_c = JumboLayoutFooter;
;
var _c;
__turbopack_context__.k.register(_c, "JumboLayoutFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboLayout/components/JumboLayoutFooter/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$components$2f$JumboLayoutFooter$2f$JumboLayoutFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboLayout/components/JumboLayoutFooter/JumboLayoutFooter.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboLayout/components/JumboLayoutHeader/JumboLayoutHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JumboLayoutHeader",
    ()=>JumboLayoutHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboTheme/hooks/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$AppBar$2f$AppBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AppBar$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/AppBar/AppBar.js [app-client] (ecmascript) <export default as AppBar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/styles/ThemeProvider.js [app-client] (ecmascript) <export default as ThemeProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Toolbar$2f$Toolbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Toolbar$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Toolbar/Toolbar.js [app-client] (ecmascript) <export default as Toolbar>");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboLayout/hooks/index.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function JumboLayoutHeader(param) {
    let { children } = param;
    _s();
    const { headerOptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboLayout"])();
    const { headerTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboHeaderTheme"])();
    //TODO: need to cross check this calculation
    const appBarSx = (0, __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppBarSx"])();
    if ((headerOptions === null || headerOptions === void 0 ? void 0 : headerOptions.hide) || !children) return null;
    if (headerOptions === null || headerOptions === void 0 ? void 0 : headerOptions.plain) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__["ThemeProvider"], {
            theme: headerTheme,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                component: 'header',
                sx: headerOptions.sx,
                children: children
            }, void 0, false, {
                fileName: "[project]/@jumbo/components/JumboLayout/components/JumboLayoutHeader/JumboLayoutHeader.tsx",
                lineNumber: 18,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/@jumbo/components/JumboLayout/components/JumboLayoutHeader/JumboLayoutHeader.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__["ThemeProvider"], {
        theme: headerTheme,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$AppBar$2f$AppBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AppBar$3e$__["AppBar"], {
            elevation: 0,
            position: (headerOptions === null || headerOptions === void 0 ? void 0 : headerOptions.fixed) ? 'fixed' : 'relative',
            sx: {
                ...appBarSx
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Toolbar$2f$Toolbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Toolbar$3e$__["Toolbar"], {
                sx: {
                    height: '100%',
                    px: {
                        lg: 6,
                        sm: 4,
                        xs: 2.5
                    }
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/@jumbo/components/JumboLayout/components/JumboLayoutHeader/JumboLayoutHeader.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/@jumbo/components/JumboLayout/components/JumboLayoutHeader/JumboLayoutHeader.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/@jumbo/components/JumboLayout/components/JumboLayoutHeader/JumboLayoutHeader.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(JumboLayoutHeader, "2tc4r+VsjBKKV4p3mJFY25gwd3A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboLayout"],
        __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboHeaderTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppBarSx"]
    ];
});
_c = JumboLayoutHeader;
;
var _c;
__turbopack_context__.k.register(_c, "JumboLayoutHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboLayout/components/JumboLayoutHeader/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$components$2f$JumboLayoutHeader$2f$JumboLayoutHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboLayout/components/JumboLayoutHeader/JumboLayoutHeader.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboLayout/components/JumboLayoutProvider/reducer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "jumboLayoutReducer",
    ()=>jumboLayoutReducer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/utilities/constants.ts [app-client] (ecmascript)");
;
function jumboLayoutReducer(state, action) {
    switch(action.type){
        case __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAYOUT_ACTIONS"].SET_OPTIONS:
            return {
                ...state,
                ...action.payload
            };
        case __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAYOUT_ACTIONS"].SET_SIDEBAR_OPTIONS:
            return {
                ...state,
                sidebar: {
                    ...state.sidebar,
                    ...action.payload
                }
            };
        case __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAYOUT_ACTIONS"].SET_HEADER_OPTIONS:
            return {
                ...state,
                header: {
                    ...state.header,
                    ...action.payload
                }
            };
        case __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAYOUT_ACTIONS"].SET_FOOTER_OPTIONS:
            return {
                ...state,
                footer: {
                    ...state.footer,
                    ...action.payload
                }
            };
        case __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAYOUT_ACTIONS"].SET_CONTENT_OPTIONS:
            return {
                ...state,
                content: {
                    ...state.content,
                    ...action.payload
                }
            };
        case __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAYOUT_ACTIONS"].SET_ROOT_OPTIONS:
            return {
                ...state,
                root: {
                    ...state.root,
                    ...action.payload
                }
            };
        default:
            return {
                ...state
            };
    }
}
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboLayout/components/JumboLayoutProvider/JumboLayoutProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JumboLayoutProvider",
    ()=>JumboLayoutProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboTheme/hooks/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/utilities/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useMediaQuery$2f$useMediaQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/system/esm/useMediaQuery/useMediaQuery.js [app-client] (ecmascript) <export default as useMediaQuery>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$components$2f$JumboLayoutProvider$2f$JumboLayoutContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboLayout/components/JumboLayoutProvider/JumboLayoutContext.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$components$2f$JumboLayoutProvider$2f$reducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboLayout/components/JumboLayoutProvider/reducer.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function JumboLayoutProvider(param) {
    let { children, layoutConfig, debugOptions } = param;
    var _layoutOptions_sidebar;
    _s();
    const [layoutOptions, setLayoutOptions] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useReducer(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$components$2f$JumboLayoutProvider$2f$reducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jumboLayoutReducer"], layoutConfig !== null && layoutConfig !== void 0 ? layoutConfig : __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$components$2f$JumboLayoutProvider$2f$JumboLayoutContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultLayoutOptions"]);
    const [prevLayoutOptions, setPrevLayoutOptions] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    //handle mobile screen sizes
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboTheme"])();
    var _layoutOptions_sidebar_drawerBreakpoint;
    const isBelowLg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useMediaQuery$2f$useMediaQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__["useMediaQuery"])(theme.breakpoints.down((_layoutOptions_sidebar_drawerBreakpoint = (_layoutOptions_sidebar = layoutOptions.sidebar) === null || _layoutOptions_sidebar === void 0 ? void 0 : _layoutOptions_sidebar.drawerBreakpoint) !== null && _layoutOptions_sidebar_drawerBreakpoint !== void 0 ? _layoutOptions_sidebar_drawerBreakpoint : 'xl'));
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "JumboLayoutProvider.useEffect": ()=>{
            if (isBelowLg) {
                setSidebarOptions({
                    variant: __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIDEBAR_VARIANTS"].TEMPORARY,
                    open: false
                });
            } else {
                setSidebarOptions({
                    ...prevLayoutOptions
                });
            }
        }
    }["JumboLayoutProvider.useEffect"], [
        isBelowLg,
        prevLayoutOptions
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "JumboLayoutProvider.useEffect": ()=>{
            if (layoutConfig) setLayoutOptions({
                type: __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAYOUT_ACTIONS"].SET_OPTIONS,
                payload: layoutConfig
            });
        }
    }["JumboLayoutProvider.useEffect"], [
        layoutConfig
    ]);
    const setHeaderOptions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "JumboLayoutProvider.useCallback[setHeaderOptions]": (options)=>{
            setLayoutOptions({
                type: __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAYOUT_ACTIONS"].SET_HEADER_OPTIONS,
                payload: options
            });
        }
    }["JumboLayoutProvider.useCallback[setHeaderOptions]"], []);
    const setSidebarOptions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "JumboLayoutProvider.useCallback[setSidebarOptions]": (options)=>{
            if (isBelowLg) {
                if (prevLayoutOptions === null) setPrevLayoutOptions(layoutOptions.sidebar);
            } else {
                if (prevLayoutOptions) {
                    setPrevLayoutOptions(null);
                }
            }
            setLayoutOptions({
                type: __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAYOUT_ACTIONS"].SET_SIDEBAR_OPTIONS,
                payload: options
            });
        }
    }["JumboLayoutProvider.useCallback[setSidebarOptions]"], [
        isBelowLg,
        prevLayoutOptions,
        layoutOptions.sidebar
    ]);
    const setFooterOptions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "JumboLayoutProvider.useCallback[setFooterOptions]": (options)=>{
            setLayoutOptions({
                type: __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAYOUT_ACTIONS"].SET_FOOTER_OPTIONS,
                payload: options
            });
        }
    }["JumboLayoutProvider.useCallback[setFooterOptions]"], []);
    const setRootOptions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "JumboLayoutProvider.useCallback[setRootOptions]": (options)=>{
            setLayoutOptions({
                type: __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAYOUT_ACTIONS"].SET_ROOT_OPTIONS,
                payload: options
            });
        }
    }["JumboLayoutProvider.useCallback[setRootOptions]"], []);
    const setContentOptions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "JumboLayoutProvider.useCallback[setContentOptions]": (options)=>{
            setLayoutOptions({
                type: __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAYOUT_ACTIONS"].SET_CONTENT_OPTIONS,
                payload: options
            });
        }
    }["JumboLayoutProvider.useCallback[setContentOptions]"], []);
    const setWrapperOptions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "JumboLayoutProvider.useCallback[setWrapperOptions]": (options)=>{
            setLayoutOptions({
                type: __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAYOUT_ACTIONS"].SET_WRAPPER_OPTIONS,
                payload: options
            });
        }
    }["JumboLayoutProvider.useCallback[setWrapperOptions]"], []);
    const setMainOptions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "JumboLayoutProvider.useCallback[setMainOptions]": (options)=>{
            setLayoutOptions({
                type: __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAYOUT_ACTIONS"].SET_MAIN_OPTIONS,
                payload: options
            });
        }
    }["JumboLayoutProvider.useCallback[setMainOptions]"], []);
    const setOptions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "JumboLayoutProvider.useCallback[setOptions]": (options)=>{
            setLayoutOptions({
                type: __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAYOUT_ACTIONS"].SET_OPTIONS,
                payload: options
            });
        }
    }["JumboLayoutProvider.useCallback[setOptions]"], []);
    const setRightSidebarOptions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "JumboLayoutProvider.useCallback[setRightSidebarOptions]": (options)=>{
            setLayoutOptions({
                type: __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAYOUT_ACTIONS"].SET_RIGHT_SIDEBAR_OPTIONS,
                payload: options
            });
        }
    }["JumboLayoutProvider.useCallback[setRightSidebarOptions]"], []);
    const layoutContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "JumboLayoutProvider.useMemo[layoutContext]": ()=>({
                layoutOptions,
                headerOptions: layoutOptions.header,
                sidebarOptions: layoutOptions.sidebar,
                footerOptions: layoutOptions.footer,
                contentOptions: layoutOptions.content,
                rootOptions: layoutOptions.root,
                wrapperOptions: layoutOptions.wrapper,
                mainOptions: layoutOptions.main,
                rightSidebarOptions: layoutOptions.rightSidebar,
                debugOptions,
                setHeaderOptions,
                setSidebarOptions,
                setFooterOptions,
                setContentOptions,
                setRootOptions,
                setRightSidebarOptions,
                setWrapperOptions,
                setMainOptions,
                setOptions
            })
    }["JumboLayoutProvider.useMemo[layoutContext]"], [
        layoutOptions,
        debugOptions,
        setHeaderOptions,
        setFooterOptions,
        setSidebarOptions,
        setContentOptions,
        setRightSidebarOptions,
        setRootOptions,
        setWrapperOptions,
        setMainOptions,
        setOptions
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$components$2f$JumboLayoutProvider$2f$JumboLayoutContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JumboLayoutContext"].Provider, {
        value: layoutContext,
        children: children
    }, void 0, false, {
        fileName: "[project]/@jumbo/components/JumboLayout/components/JumboLayoutProvider/JumboLayoutProvider.tsx",
        lineNumber: 184,
        columnNumber: 5
    }, this);
}
_s(JumboLayoutProvider, "J6F6pYofxTFuCx98Mp2xPDALGNQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useMediaQuery$2f$useMediaQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__["useMediaQuery"]
    ];
});
_c = JumboLayoutProvider;
;
var _c;
__turbopack_context__.k.register(_c, "JumboLayoutProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboLayout/components/JumboLayoutProvider/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$components$2f$JumboLayoutProvider$2f$JumboLayoutContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboLayout/components/JumboLayoutProvider/JumboLayoutContext.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$components$2f$JumboLayoutProvider$2f$JumboLayoutProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboLayout/components/JumboLayoutProvider/JumboLayoutProvider.tsx [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboLayout/components/JumboLayoutSidebar/JumboLayoutAside.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JumboLayoutAside",
    ()=>JumboLayoutAside
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboTheme/hooks/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/styles/ThemeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboLayout/hooks/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$shared$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/@jumbo/shared/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$shared$2f$components$2f$Div$2f$Div$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/shared/components/Div/Div.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
function JumboLayoutAside(param) {
    let { children } = param;
    var _sidebarTheme_sidebar_overlay, _sidebarTheme_sidebar, _sidebarTheme_sidebar_overlay1, _sidebarTheme_sidebar_overlay2;
    _s();
    const { sidebarTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboSidebarTheme"])();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboTheme"])();
    const { sidebarOptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboLayout"])();
    const sidebarWithDirectionByMainTheme = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "JumboLayoutAside.useMemo[sidebarWithDirectionByMainTheme]": ()=>{
            return {
                ...sidebarTheme,
                direction: theme.direction
            };
        }
    }["JumboLayoutAside.useMemo[sidebarWithDirectionByMainTheme]"], [
        theme.direction,
        sidebarTheme
    ]);
    if (sidebarOptions === null || sidebarOptions === void 0 ? void 0 : sidebarOptions.hide) {
        return null;
    }
    if (sidebarOptions.plain) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            theme: sidebarWithDirectionByMainTheme,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                component: 'aside',
                sx: sidebarOptions.sx,
                children: children
            }, void 0, false, {
                fileName: "[project]/@jumbo/components/JumboLayout/components/JumboLayoutSidebar/JumboLayoutAside.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/@jumbo/components/JumboLayout/components/JumboLayoutSidebar/JumboLayoutAside.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this);
    }
    var _sidebarTheme_sidebar_overlay_opacity, _sidebarTheme_sidebar_overlay_opacity1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        theme: sidebarWithDirectionByMainTheme,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$shared$2f$components$2f$Div$2f$Div$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Div"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        flex: 1,
                        display: 'flex',
                        minWidth: 0,
                        flexDirection: 'column',
                        minHeight: '100%',
                        overflow: 'hidden',
                        position: 'relative',
                        zIndex: 1
                    },
                    children: children
                }, void 0, false, {
                    fileName: "[project]/@jumbo/components/JumboLayout/components/JumboLayoutSidebar/JumboLayoutAside.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                (sidebarTheme === null || sidebarTheme === void 0 ? void 0 : (_sidebarTheme_sidebar = sidebarTheme.sidebar) === null || _sidebarTheme_sidebar === void 0 ? void 0 : (_sidebarTheme_sidebar_overlay = _sidebarTheme_sidebar.overlay) === null || _sidebarTheme_sidebar_overlay === void 0 ? void 0 : _sidebarTheme_sidebar_overlay.bgcolor) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        position: 'absolute',
                        height: '100%',
                        left: 0,
                        right: 0,
                        top: 0,
                        ...Array.isArray(sidebarTheme.sidebar.overlay.bgcolor) && sidebarTheme.sidebar.overlay.bgcolor.length > 0 ? {
                            backgroundImage: "linear-gradient(".concat(sidebarTheme.sidebar.overlay.bgcolor[0], ", ").concat(sidebarTheme.sidebar.overlay.bgcolor[1], ")"),
                            opacity: sidebarTheme.sidebar.overlay.opacity ? (_sidebarTheme_sidebar_overlay_opacity = (_sidebarTheme_sidebar_overlay1 = sidebarTheme.sidebar.overlay) === null || _sidebarTheme_sidebar_overlay1 === void 0 ? void 0 : _sidebarTheme_sidebar_overlay1.opacity) !== null && _sidebarTheme_sidebar_overlay_opacity !== void 0 ? _sidebarTheme_sidebar_overlay_opacity : 0.85 : 1
                        } : {
                            bgcolor: sidebarTheme.sidebar.overlay.bgcolor,
                            opacity: (_sidebarTheme_sidebar_overlay_opacity1 = (_sidebarTheme_sidebar_overlay2 = sidebarTheme.sidebar.overlay) === null || _sidebarTheme_sidebar_overlay2 === void 0 ? void 0 : _sidebarTheme_sidebar_overlay2.opacity) !== null && _sidebarTheme_sidebar_overlay_opacity1 !== void 0 ? _sidebarTheme_sidebar_overlay_opacity1 : 1
                        }
                    }
                }, void 0, false, {
                    fileName: "[project]/@jumbo/components/JumboLayout/components/JumboLayoutSidebar/JumboLayoutAside.tsx",
                    lineNumber: 57,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/@jumbo/components/JumboLayout/components/JumboLayoutSidebar/JumboLayoutAside.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/@jumbo/components/JumboLayout/components/JumboLayoutSidebar/JumboLayoutAside.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(JumboLayoutAside, "koYV1UWA2VYb2qy5lxSXi/0R3hM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboSidebarTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboLayout"]
    ];
});
_c = JumboLayoutAside;
;
var _c;
__turbopack_context__.k.register(_c, "JumboLayoutAside");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboLayout/components/JumboLayoutSidebar/JumboLayoutDrawer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JumboLayoutDrawer",
    ()=>JumboLayoutDrawer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboTheme/hooks/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/utilities/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Drawer$2f$Drawer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Drawer$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Drawer/Drawer.js [app-client] (ecmascript) <export default as Drawer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/styles/ThemeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboLayout/hooks/index.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
function JumboLayoutDrawer(param) {
    let { children } = param;
    var _sidebarTheme_sidebar_overlay, _sidebarTheme_sidebar, _sidebarTheme_sidebar_overlay1, _sidebarTheme_sidebar_overlay2;
    _s();
    const { sidebarTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboSidebarTheme"])();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboTheme"])();
    const { sidebarOptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboLayout"])();
    const { handleClose, handleMouseEnter, handleMouseLeave } = (0, __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebarDrawerHandlers"])();
    const drawerSx = (0, __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebarDrawerSx"])();
    const drawerVariant = (0, __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDrawerVariant"])();
    // const headerSpaceSx = useHeaderSpaceSx();
    const sidebarWithDirectionByMainTheme = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "JumboLayoutDrawer.useMemo[sidebarWithDirectionByMainTheme]": ()=>{
            return {
                ...sidebarTheme,
                direction: theme.direction
            };
        }
    }["JumboLayoutDrawer.useMemo[sidebarWithDirectionByMainTheme]"], [
        theme.direction,
        sidebarTheme
    ]);
    if (sidebarOptions === null || sidebarOptions === void 0 ? void 0 : sidebarOptions.hide) {
        return null;
    }
    var _sidebarTheme_sidebar_overlay_opacity, _sidebarTheme_sidebar_overlay_opacity1;
    // function handleMenuToggle() {
    //   setSidebarOptions({ open: false });
    // }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        theme: sidebarWithDirectionByMainTheme,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Drawer$2f$Drawer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Drawer$3e$__["Drawer"], {
            sx: drawerSx,
            anchor: sidebarOptions === null || sidebarOptions === void 0 ? void 0 : sidebarOptions.anchor,
            open: sidebarOptions === null || sidebarOptions === void 0 ? void 0 : sidebarOptions.open,
            variant: drawerVariant,
            transitionDuration: 300,
            ModalProps: {
                keepMounted: true
            },
            hideBackdrop: (sidebarOptions === null || sidebarOptions === void 0 ? void 0 : sidebarOptions.variant) !== __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIDEBAR_VARIANTS"].TEMPORARY,
            onClose: handleClose,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        flex: 1,
                        display: 'flex',
                        minWidth: 0,
                        flexDirection: 'column',
                        minHeight: '100%',
                        overflow: 'hidden',
                        position: 'relative',
                        zIndex: 1
                    },
                    onMouseEnter: handleMouseEnter,
                    onMouseLeave: handleMouseLeave,
                    children: children
                }, void 0, false, {
                    fileName: "[project]/@jumbo/components/JumboLayout/components/JumboLayoutSidebar/JumboLayoutDrawer.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this),
                (sidebarTheme === null || sidebarTheme === void 0 ? void 0 : (_sidebarTheme_sidebar = sidebarTheme.sidebar) === null || _sidebarTheme_sidebar === void 0 ? void 0 : (_sidebarTheme_sidebar_overlay = _sidebarTheme_sidebar.overlay) === null || _sidebarTheme_sidebar_overlay === void 0 ? void 0 : _sidebarTheme_sidebar_overlay.bgcolor) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        position: 'absolute',
                        height: '100%',
                        left: 0,
                        right: 0,
                        top: 0,
                        ...Array.isArray(sidebarTheme.sidebar.overlay.bgcolor) && sidebarTheme.sidebar.overlay.bgcolor.length > 0 ? {
                            backgroundImage: "linear-gradient(".concat(sidebarTheme.sidebar.overlay.bgcolor[0], ", ").concat(sidebarTheme.sidebar.overlay.bgcolor[1], ")"),
                            opacity: sidebarTheme.sidebar.overlay.opacity ? (_sidebarTheme_sidebar_overlay_opacity = (_sidebarTheme_sidebar_overlay1 = sidebarTheme.sidebar.overlay) === null || _sidebarTheme_sidebar_overlay1 === void 0 ? void 0 : _sidebarTheme_sidebar_overlay1.opacity) !== null && _sidebarTheme_sidebar_overlay_opacity !== void 0 ? _sidebarTheme_sidebar_overlay_opacity : 0.85 : 1
                        } : {
                            bgcolor: sidebarTheme.sidebar.overlay.bgcolor,
                            opacity: (_sidebarTheme_sidebar_overlay_opacity1 = (_sidebarTheme_sidebar_overlay2 = sidebarTheme.sidebar.overlay) === null || _sidebarTheme_sidebar_overlay2 === void 0 ? void 0 : _sidebarTheme_sidebar_overlay2.opacity) !== null && _sidebarTheme_sidebar_overlay_opacity1 !== void 0 ? _sidebarTheme_sidebar_overlay_opacity1 : 1
                        }
                    }
                }, void 0, false, {
                    fileName: "[project]/@jumbo/components/JumboLayout/components/JumboLayoutSidebar/JumboLayoutDrawer.tsx",
                    lineNumber: 72,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/@jumbo/components/JumboLayout/components/JumboLayoutSidebar/JumboLayoutDrawer.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/@jumbo/components/JumboLayout/components/JumboLayoutSidebar/JumboLayoutDrawer.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(JumboLayoutDrawer, "GFi2wcxVb0qcj6fec5Q3RupQARw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboSidebarTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboLayout"],
        __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebarDrawerHandlers"],
        __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebarDrawerSx"],
        __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDrawerVariant"]
    ];
});
_c = JumboLayoutDrawer;
;
var _c;
__turbopack_context__.k.register(_c, "JumboLayoutDrawer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboLayout/components/JumboLayoutSidebar/JumboLayoutSidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JumboLayoutSidebar",
    ()=>JumboLayoutSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboLayout/hooks/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$components$2f$JumboLayoutSidebar$2f$JumboLayoutAside$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboLayout/components/JumboLayoutSidebar/JumboLayoutAside.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$components$2f$JumboLayoutSidebar$2f$JumboLayoutDrawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboLayout/components/JumboLayoutSidebar/JumboLayoutDrawer.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function JumboLayoutSidebar(param) {
    let { children } = param;
    _s();
    const { sidebarOptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboLayout"])();
    if (sidebarOptions.drawer) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$components$2f$JumboLayoutSidebar$2f$JumboLayoutDrawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JumboLayoutDrawer"], {
            children: children
        }, void 0, false, {
            fileName: "[project]/@jumbo/components/JumboLayout/components/JumboLayoutSidebar/JumboLayoutSidebar.tsx",
            lineNumber: 14,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$components$2f$JumboLayoutSidebar$2f$JumboLayoutAside$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JumboLayoutAside"], {
        children: children
    }, void 0, false, {
        fileName: "[project]/@jumbo/components/JumboLayout/components/JumboLayoutSidebar/JumboLayoutSidebar.tsx",
        lineNumber: 16,
        columnNumber: 10
    }, this);
}
_s(JumboLayoutSidebar, "+T1UUcYg5cXZBpxp/p+apPWBLWs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboLayout"]
    ];
});
_c = JumboLayoutSidebar;
var _c;
__turbopack_context__.k.register(_c, "JumboLayoutSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboLayout/components/JumboLayoutSidebar/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$components$2f$JumboLayoutSidebar$2f$JumboLayoutSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboLayout/components/JumboLayoutSidebar/JumboLayoutSidebar.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboLayout/components/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$components$2f$JumboLayoutFooter$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboLayout/components/JumboLayoutFooter/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$components$2f$JumboLayoutHeader$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboLayout/components/JumboLayoutHeader/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$components$2f$JumboLayoutProvider$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboLayout/components/JumboLayoutProvider/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$components$2f$JumboLayoutSidebar$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboLayout/components/JumboLayoutSidebar/index.ts [app-client] (ecmascript) <locals>");
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboLayout/components/JumboLayoutRightSidebar/JumboLayoutRside.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JumboLayoutRside",
    ()=>JumboLayoutRside
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboTheme/hooks/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/styles/ThemeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboLayout/hooks/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$shared$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/@jumbo/shared/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$shared$2f$components$2f$Div$2f$Div$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/shared/components/Div/Div.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
function JumboLayoutRside(param) {
    let { children } = param;
    var _sidebarTheme_sidebar_overlay, _sidebarTheme_sidebar, _sidebarTheme_sidebar_overlay1, _sidebarTheme_sidebar_overlay2;
    _s();
    const { sidebarTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboSidebarTheme"])();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboTheme"])();
    const { rightSidebarOptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboLayout"])();
    const sidebarWithDirectionByMainTheme = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "JumboLayoutRside.useMemo[sidebarWithDirectionByMainTheme]": ()=>{
            return {
                ...sidebarTheme,
                direction: theme.direction
            };
        }
    }["JumboLayoutRside.useMemo[sidebarWithDirectionByMainTheme]"], [
        theme.direction,
        sidebarTheme
    ]);
    if (rightSidebarOptions === null || rightSidebarOptions === void 0 ? void 0 : rightSidebarOptions.hide) {
        return null;
    }
    if (rightSidebarOptions === null || rightSidebarOptions === void 0 ? void 0 : rightSidebarOptions.plain) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            theme: sidebarWithDirectionByMainTheme,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                component: 'aside',
                sx: rightSidebarOptions.sx,
                children: children
            }, void 0, false, {
                fileName: "[project]/@jumbo/components/JumboLayout/components/JumboLayoutRightSidebar/JumboLayoutRside.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/@jumbo/components/JumboLayout/components/JumboLayoutRightSidebar/JumboLayoutRside.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this);
    }
    var _sidebarTheme_sidebar_overlay_opacity, _sidebarTheme_sidebar_overlay_opacity1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        theme: sidebarWithDirectionByMainTheme,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$shared$2f$components$2f$Div$2f$Div$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Div"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        flex: 1,
                        display: 'flex',
                        minWidth: 0,
                        flexDirection: 'column',
                        minHeight: '100%',
                        overflow: 'hidden',
                        position: 'relative',
                        zIndex: 1
                    },
                    children: children
                }, void 0, false, {
                    fileName: "[project]/@jumbo/components/JumboLayout/components/JumboLayoutRightSidebar/JumboLayoutRside.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                (sidebarTheme === null || sidebarTheme === void 0 ? void 0 : (_sidebarTheme_sidebar = sidebarTheme.sidebar) === null || _sidebarTheme_sidebar === void 0 ? void 0 : (_sidebarTheme_sidebar_overlay = _sidebarTheme_sidebar.overlay) === null || _sidebarTheme_sidebar_overlay === void 0 ? void 0 : _sidebarTheme_sidebar_overlay.bgcolor) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        position: 'absolute',
                        height: '100%',
                        left: 0,
                        right: 0,
                        top: 0,
                        ...Array.isArray(sidebarTheme.sidebar.overlay.bgcolor) && sidebarTheme.sidebar.overlay.bgcolor.length > 0 ? {
                            backgroundImage: "linear-gradient(".concat(sidebarTheme.sidebar.overlay.bgcolor[0], ", ").concat(sidebarTheme.sidebar.overlay.bgcolor[1], ")"),
                            opacity: sidebarTheme.sidebar.overlay.opacity ? (_sidebarTheme_sidebar_overlay_opacity = (_sidebarTheme_sidebar_overlay1 = sidebarTheme.sidebar.overlay) === null || _sidebarTheme_sidebar_overlay1 === void 0 ? void 0 : _sidebarTheme_sidebar_overlay1.opacity) !== null && _sidebarTheme_sidebar_overlay_opacity !== void 0 ? _sidebarTheme_sidebar_overlay_opacity : 0.85 : 1
                        } : {
                            bgcolor: sidebarTheme.sidebar.overlay.bgcolor,
                            opacity: (_sidebarTheme_sidebar_overlay_opacity1 = (_sidebarTheme_sidebar_overlay2 = sidebarTheme.sidebar.overlay) === null || _sidebarTheme_sidebar_overlay2 === void 0 ? void 0 : _sidebarTheme_sidebar_overlay2.opacity) !== null && _sidebarTheme_sidebar_overlay_opacity1 !== void 0 ? _sidebarTheme_sidebar_overlay_opacity1 : 1
                        }
                    }
                }, void 0, false, {
                    fileName: "[project]/@jumbo/components/JumboLayout/components/JumboLayoutRightSidebar/JumboLayoutRside.tsx",
                    lineNumber: 57,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/@jumbo/components/JumboLayout/components/JumboLayoutRightSidebar/JumboLayoutRside.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/@jumbo/components/JumboLayout/components/JumboLayoutRightSidebar/JumboLayoutRside.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(JumboLayoutRside, "02ZSX0b29BO+oZmGDVLzjBn88ug=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboSidebarTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboLayout"]
    ];
});
_c = JumboLayoutRside;
;
var _c;
__turbopack_context__.k.register(_c, "JumboLayoutRside");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboLayout/components/JumboLayoutRightSidebar/JumboLayoutRightSidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JumboLayoutRightSidebar",
    ()=>JumboLayoutRightSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboLayout/hooks/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$components$2f$JumboLayoutSidebar$2f$JumboLayoutDrawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboLayout/components/JumboLayoutSidebar/JumboLayoutDrawer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$components$2f$JumboLayoutRightSidebar$2f$JumboLayoutRside$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboLayout/components/JumboLayoutRightSidebar/JumboLayoutRside.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function JumboLayoutRightSidebar(param) {
    let { children } = param;
    _s();
    const { rightSidebarOptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboLayout"])();
    if (rightSidebarOptions === null || rightSidebarOptions === void 0 ? void 0 : rightSidebarOptions.drawer) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$components$2f$JumboLayoutSidebar$2f$JumboLayoutDrawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JumboLayoutDrawer"], {
            children: children
        }, void 0, false, {
            fileName: "[project]/@jumbo/components/JumboLayout/components/JumboLayoutRightSidebar/JumboLayoutRightSidebar.tsx",
            lineNumber: 14,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$components$2f$JumboLayoutRightSidebar$2f$JumboLayoutRside$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JumboLayoutRside"], {
        children: children
    }, void 0, false, {
        fileName: "[project]/@jumbo/components/JumboLayout/components/JumboLayoutRightSidebar/JumboLayoutRightSidebar.tsx",
        lineNumber: 16,
        columnNumber: 10
    }, this);
}
_s(JumboLayoutRightSidebar, "AVBL6tmnZjMLuzyX1+qujd7ZWuk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboLayout"]
    ];
});
_c = JumboLayoutRightSidebar;
var _c;
__turbopack_context__.k.register(_c, "JumboLayoutRightSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboLayout/components/JumboLayoutRightSidebar/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$components$2f$JumboLayoutRightSidebar$2f$JumboLayoutRightSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboLayout/components/JumboLayoutRightSidebar/JumboLayoutRightSidebar.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboLayout/JumboLayout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JumboLayout",
    ()=>JumboLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Container$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Container/Container.js [app-client] (ecmascript) <export default as Container>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Toolbar$2f$Toolbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Toolbar$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Toolbar/Toolbar.js [app-client] (ecmascript) <export default as Toolbar>");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$shared$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/@jumbo/shared/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$shared$2f$components$2f$Div$2f$Div$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/shared/components/Div/Div.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/utilities/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboLayout/components/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$components$2f$JumboLayoutFooter$2f$JumboLayoutFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboLayout/components/JumboLayoutFooter/JumboLayoutFooter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$components$2f$JumboLayoutHeader$2f$JumboLayoutHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboLayout/components/JumboLayoutHeader/JumboLayoutHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$components$2f$JumboLayoutSidebar$2f$JumboLayoutSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboLayout/components/JumboLayoutSidebar/JumboLayoutSidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$components$2f$JumboLayoutRightSidebar$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboLayout/components/JumboLayoutRightSidebar/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$components$2f$JumboLayoutRightSidebar$2f$JumboLayoutRightSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboLayout/components/JumboLayoutRightSidebar/JumboLayoutRightSidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboLayout/hooks/index.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function WrapperContainer(param) {
    let { children, container, sx } = param;
    if (container) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Container$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
            maxWidth: false,
            sx: {
                maxWidth: '1320px',
                display: 'flex',
                minWidth: 0,
                flex: 1,
                flexDirection: 'column',
                ...sx
            },
            disableGutters: true,
            children: children
        }, void 0, false, {
            fileName: "[project]/@jumbo/components/JumboLayout/JumboLayout.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this);
    }
    return children;
}
_c = WrapperContainer;
function JumboLayout(props) {
    _s();
    const { rootOptions, sidebarOptions, headerOptions, contentOptions, wrapperOptions, mainOptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboLayout"])();
    const headerSpaceSx = (0, __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHeaderSpaceSx"])();
    const contentMargin = (0, __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContentMargin"])();
    var _wrapperOptions_sx, _mainOptions_sx, _contentOptions_sx;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$shared$2f$components$2f$Div$2f$Div$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Div"], {
        sx: {
            display: 'flex',
            flex: 1,
            minWidth: 0,
            minHeight: '100%',
            flexDirection: 'column',
            ...rootOptions === null || rootOptions === void 0 ? void 0 : rootOptions.sx
        },
        className: "CmtLayout-root",
        children: [
            (sidebarOptions === null || sidebarOptions === void 0 ? void 0 : sidebarOptions.style) === __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIDEBAR_STYLES"].CLIPPED_UNDER_HEADER && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$components$2f$JumboLayoutHeader$2f$JumboLayoutHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JumboLayoutHeader"], {
                children: props.header
            }, void 0, false, {
                fileName: "[project]/@jumbo/components/JumboLayout/JumboLayout.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WrapperContainer, {
                container: wrapperOptions === null || wrapperOptions === void 0 ? void 0 : wrapperOptions.container,
                sx: (wrapperOptions === null || wrapperOptions === void 0 ? void 0 : wrapperOptions.containerSx) || {},
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        display: 'flex',
                        flex: 1,
                        minWidth: 0,
                        position: 'relative',
                        ...(_wrapperOptions_sx = wrapperOptions === null || wrapperOptions === void 0 ? void 0 : wrapperOptions.sx) !== null && _wrapperOptions_sx !== void 0 ? _wrapperOptions_sx : {}
                    },
                    className: "CmtLayout-wrapper",
                    component: (wrapperOptions === null || wrapperOptions === void 0 ? void 0 : wrapperOptions.component) || 'div',
                    children: [
                        props.sidebar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$components$2f$JumboLayoutSidebar$2f$JumboLayoutSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JumboLayoutSidebar"], {
                            children: props.sidebar
                        }, void 0, false, {
                            fileName: "[project]/@jumbo/components/JumboLayout/JumboLayout.tsx",
                            lineNumber: 90,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$shared$2f$components$2f$Div$2f$Div$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Div"], {
                            sx: {
                                display: 'flex',
                                minWidth: 0,
                                flex: 1,
                                flexDirection: 'column',
                                minHeight: '100%',
                                ...contentMargin ? {
                                    marginLeft: {
                                        sm: "".concat(contentMargin, "px")
                                    }
                                } : {},
                                transition: (theme)=>theme.transitions.create([
                                        'margin-left'
                                    ]),
                                ...(_mainOptions_sx = mainOptions === null || mainOptions === void 0 ? void 0 : mainOptions.sx) !== null && _mainOptions_sx !== void 0 ? _mainOptions_sx : {}
                            },
                            className: "CmtLayout-main",
                            children: [
                                (sidebarOptions === null || sidebarOptions === void 0 ? void 0 : sidebarOptions.style) !== __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIDEBAR_STYLES"].CLIPPED_UNDER_HEADER && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$components$2f$JumboLayoutHeader$2f$JumboLayoutHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JumboLayoutHeader"], {
                                    children: props.header
                                }, void 0, false, {
                                    fileName: "[project]/@jumbo/components/JumboLayout/JumboLayout.tsx",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, this),
                                !headerOptions.hide && headerOptions.fixed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Toolbar$2f$Toolbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Toolbar$3e$__["Toolbar"], {
                                    sx: {
                                        ...headerSpaceSx
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/@jumbo/components/JumboLayout/JumboLayout.tsx",
                                    lineNumber: 115,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$shared$2f$components$2f$Div$2f$Div$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Div"], {
                                    sx: {
                                        display: 'flex',
                                        minWidth: 0,
                                        flex: 1,
                                        flexDirection: 'column',
                                        py: 4,
                                        px: {
                                            lg: 6,
                                            sm: 4,
                                            xs: 2.5
                                        },
                                        ...(_contentOptions_sx = contentOptions === null || contentOptions === void 0 ? void 0 : contentOptions.sx) !== null && _contentOptions_sx !== void 0 ? _contentOptions_sx : {}
                                    },
                                    className: "CmtLayout-content",
                                    children: props.children
                                }, void 0, false, {
                                    fileName: "[project]/@jumbo/components/JumboLayout/JumboLayout.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$components$2f$JumboLayoutFooter$2f$JumboLayoutFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JumboLayoutFooter"], {
                                    children: props.footer
                                }, void 0, false, {
                                    fileName: "[project]/@jumbo/components/JumboLayout/JumboLayout.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/@jumbo/components/JumboLayout/JumboLayout.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        (props === null || props === void 0 ? void 0 : props.rightSidebar) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$components$2f$JumboLayoutRightSidebar$2f$JumboLayoutRightSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JumboLayoutRightSidebar"], {
                            children: props === null || props === void 0 ? void 0 : props.rightSidebar
                        }, void 0, false, {
                            fileName: "[project]/@jumbo/components/JumboLayout/JumboLayout.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/@jumbo/components/JumboLayout/JumboLayout.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/@jumbo/components/JumboLayout/JumboLayout.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/@jumbo/components/JumboLayout/JumboLayout.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_s(JumboLayout, "7TZ1Ycgsfp26ZD2hrlblhTd88Qs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboLayout"],
        __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHeaderSpaceSx"],
        __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboLayout$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContentMargin"]
    ];
});
_c1 = JumboLayout;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "WrapperContainer");
__turbopack_context__.k.register(_c1, "JumboLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utilities/constants/icons.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "APP_ICONS",
    ()=>APP_ICONS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CreditCardOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/CreditCardOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$DeveloperBoardOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/DeveloperBoardOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$FacebookOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/FacebookOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$HandshakeOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/HandshakeOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Instagram.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$LinkedIn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/LinkedIn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Mail.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$MessageOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/MessageOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$NotificationsActiveRounded$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/NotificationsActiveRounded.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$PaymentOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/PaymentOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Refresh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Refresh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Settings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$SettingsOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/SettingsOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$TaskAltOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/TaskAltOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Twitter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$YouTube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/YouTube.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$BackupOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/BackupOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CurrencyExchangeOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/CurrencyExchangeOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$DragIndicator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/DragIndicator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$EventNote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/EventNote.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$GraphicEq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/GraphicEq.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$InsertChartOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/InsertChartOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ListAltOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/ListAltOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ModeEditOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/ModeEditOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$MyLocation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/MyLocation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Newspaper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Newspaper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$PieChartOutlineOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/PieChartOutlineOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ShoppingCartOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/ShoppingCartOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$SupportAgentOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/SupportAgentOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$WarningAmber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/WarningAmber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AccountBoxOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/AccountBoxOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CallEnd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/CallEnd.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ChatOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/ChatOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ContactPageOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/ContactPageOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ContactsOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/ContactsOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CreditCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/CreditCard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$EmailOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/EmailOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ErrorOutline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/ErrorOutline.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Grid3x3Outlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Grid3x3Outlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$GridView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/GridView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$InfoOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/InfoOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$List$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/List.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$LockReset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/LockReset.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Login$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Login.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$PasswordOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/PasswordOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$PersonAddAlt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/PersonAddAlt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$RunningWithErrorsOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/RunningWithErrorsOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ScreenLockRotation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/ScreenLockRotation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$StreamOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/StreamOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ViewListOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/ViewListOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AccountCircleOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/AccountCircleOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$LeaderboardOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/LeaderboardOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$SupervisedUserCircleOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/SupervisedUserCircleOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$VerifiedUserOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/VerifiedUserOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$WidgetsOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/WidgetsOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ri/index.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const APP_ICONS = [
    {
        name: 'misc',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$GraphicEq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props: {
            sx: {
                fontSize: 20
            }
        }
    },
    {
        name: 'crypto',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CurrencyExchangeOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props: {
            sx: {
                fontSize: 20
            }
        }
    },
    {
        name: 'listing',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ListAltOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props: {
            sx: {
                fontSize: 20
            }
        }
    },
    {
        name: 'crm',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$SupportAgentOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props: {
            sx: {
                fontSize: 20
            }
        }
    },
    {
        name: 'intranet',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$PieChartOutlineOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props: {
            sx: {
                fontSize: 20
            }
        }
    },
    {
        name: 'ecommerce',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ShoppingCartOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props: {
            sx: {
                fontSize: 20
            }
        }
    },
    {
        name: 'news',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Newspaper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props: {
            sx: {
                fontSize: 20
            }
        }
    },
    /** cards menu */ {
        name: 'widget',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$WidgetsOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props: {
            sx: {
                fontSize: 20
            }
        }
    },
    {
        name: 'metric',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$LeaderboardOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props: {
            sx: {
                fontSize: 20
            }
        }
    },
    /** apps menu */ {
        name: 'chat',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ChatOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props: {
            sx: {
                fontSize: 20
            }
        }
    },
    {
        name: 'contact',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ContactsOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props: {
            sx: {
                fontSize: 20
            }
        }
    },
    {
        name: 'mail',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$EmailOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props: {
            sx: {
                fontSize: 20
            }
        }
    },
    /** extensions menu */ {
        name: 'editor',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ModeEditOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props: {
            sx: {
                fontSize: 20
            }
        }
    },
    {
        name: 'dnd',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$DragIndicator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props: {
            sx: {
                fontSize: 20
            }
        }
    },
    {
        name: 'dropzone',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$BackupOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props: {
            sx: {
                fontSize: 20
            }
        }
    },
    {
        name: 'sweet-alert',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$WarningAmber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props: {
            sx: {
                fontSize: 20
            }
        }
    },
    /** modules menu */ {
        name: 'calendar',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$EventNote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props: {
            sx: {
                fontSize: 20
            }
        }
    },
    {
        name: 'chart',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$InsertChartOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props: {
            sx: {
                fontSize: 20
            }
        }
    },
    {
        name: 'map',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$MyLocation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props: {
            sx: {
                fontSize: 20
            }
        }
    },
    /** auth-pages menu */ {
        name: 'login',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Login$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props: {
            sx: {
                fontSize: 20
            }
        }
    },
    {
        name: 'signup',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$PersonAddAlt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props: {
            sx: {
                fontSize: 20
            }
        }
    },
    {
        name: 'forgot-password',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$PasswordOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props: {
            sx: {
                fontSize: 20
            }
        }
    },
    {
        name: 'reset-password',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$LockReset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props: {
            sx: {
                fontSize: 20
            }
        }
    },
    /** extra-pages menu */ {
        name: 'about-us',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$InfoOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props: {
            sx: {
                fontSize: 20
            }
        }
    },
    {
        name: 'contact-us',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ContactPageOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props: {
            sx: {
                fontSize: 20
            }
        }
    },
    {
        name: 'call-outs',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CallEnd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props: {
            sx: {
                fontSize: 20
            }
        }
    },
    {
        name: 'pricing-plan',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CreditCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props: {
            sx: {
                fontSize: 20
            }
        }
    },
    {
        name: '404',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ErrorOutline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props: {
            sx: {
                fontSize: 20
            }
        }
    },
    {
        name: '500',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$RunningWithErrorsOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props: {
            sx: {
                fontSize: 20
            }
        }
    },
    {
        name: 'lock-screen',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ScreenLockRotation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props: {
            sx: {
                fontSize: 20
            }
        }
    },
    /** user menu */ {
        name: 'profile',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AccountBoxOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props: {
            sx: {
                fontSize: 20
            }
        }
    },
    {
        name: 'profile-2',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$VerifiedUserOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props: {
            sx: {
                fontSize: 20
            }
        }
    },
    {
        name: 'profile-3',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AccountCircleOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props: {
            sx: {
                fontSize: 20
            }
        }
    },
    {
        name: 'profile-4',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$SupervisedUserCircleOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props: {
            sx: {
                fontSize: 20
            }
        }
    },
    {
        name: 'social-wall',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$StreamOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props: {
            sx: {
                fontSize: 20
            }
        }
    },
    /** list-view menu */ {
        name: 'projects-list',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ViewListOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props: {
            sx: {
                fontSize: 20
            }
        }
    },
    {
        name: 'users-list',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$List$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props: {
            sx: {
                fontSize: 20
            }
        }
    },
    /** grid-view menu */ {
        name: 'projects-grid',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$GridView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props: {
            sx: {
                fontSize: 20
            }
        }
    },
    {
        name: 'users-grid',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Grid3x3Outlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props: {
            sx: {
                fontSize: 20
            }
        }
    },
    {
        name: 'facebook-outlined',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$FacebookOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props: {
            sx: {
                fontSize: 20
            }
        }
    },
    {
        name: 'twitter',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props: {
            sx: {
                fontSize: 20
            }
        }
    },
    {
        name: 'instagram',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props: {
            sx: {
                fontSize: 20
            }
        }
    },
    {
        name: 'google',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props: {
            sx: {
                fontSize: 20
            }
        }
    },
    {
        name: 'youtube',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$YouTube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props: {
            sx: {
                fontSize: 20
            }
        }
    },
    {
        name: 'linkedin',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$LinkedIn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props: {
            sx: {
                fontSize: 20
            }
        }
    },
    {
        name: 'refresh',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Refresh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props: {
            sx: {
                fontSize: 20
            }
        }
    },
    {
        name: 'settings',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props: {
            sx: {
                fontSize: 20
            }
        }
    },
    {
        name: 'settings-outlined',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$SettingsOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props: {
            sx: {
                fontSize: 20
            }
        }
    },
    {
        name: 'message-outlined',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$MessageOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    },
    {
        name: 'mail',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    },
    {
        name: 'task-alt-outlined',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$TaskAltOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    },
    {
        name: 'notifications-active-rounded',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$NotificationsActiveRounded$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    },
    /** other icons */ {
        name: 'onboarding-1',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$DeveloperBoardOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    },
    {
        name: 'onboarding-2',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$HandshakeOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    },
    {
        name: 'onboarding-3',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$PaymentOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    },
    {
        name: 'public-profile',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiUser6Line"]
    },
    {
        name: 'team',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiTeamLine"]
    },
    {
        name: 'active-login',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiLockPasswordLine"]
    },
    {
        name: 'organizations',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiBuildingLine"]
    },
    {
        name: 'email',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiMailLine"]
    },
    {
        name: 'reset-password',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiLockPasswordLine"]
    },
    {
        name: '2-factor-auth',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiShieldKeyholeLine"]
    },
    {
        name: 'memberships-plan',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiMoneyDollarCircleLine"]
    },
    {
        name: 'payment-methods',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiSecurePaymentLine"]
    },
    {
        name: 'invoices',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CreditCardOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props: {
            sx: {
                fontSize: 20
            }
        }
    },
    {
        name: 'statements',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiListView"]
    },
    {
        name: 'advertising',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiAdvertisementLine"]
    },
    {
        name: 'notifications',
        Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiNotificationLine"]
    }
];
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/Icon/Icon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Icon",
    ()=>Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utilities$2f$constants$2f$icons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utilities/constants/icons.ts [app-client] (ecmascript)");
;
;
function Icon(param) {
    let { name, ...props } = param;
    if (!name) return '';
    const appIcon = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utilities$2f$constants$2f$icons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APP_ICONS"].find((icon)=>{
        return icon.name === name;
    });
    if (!appIcon) {
        return name !== null && name !== void 0 ? name : '';
    }
    const { Component } = appIcon;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {
        ...props
    }, void 0, false, {
        fileName: "[project]/@jumbo/components/Icon/Icon.tsx",
        lineNumber: 22,
        columnNumber: 10
    }, this);
}
_c = Icon;
;
var _c;
__turbopack_context__.k.register(_c, "Icon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/Icon/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$Icon$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/Icon/Icon.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/utilities/helpers.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createJumboTheme",
    ()=>createJumboTheme,
    "getBackgroundColorStyle",
    ()=>getBackgroundColorStyle,
    "getBackgroundImageStyle",
    ()=>getBackgroundImageStyle,
    "getMarginStyle",
    ()=>getMarginStyle,
    "getNavChildren",
    ()=>getNavChildren,
    "isNavGroup",
    ()=>isNavGroup,
    "isNavItem",
    ()=>isNavItem,
    "isNavSection",
    ()=>isNavSection
]);
const createJumboTheme = (mainTheme, headerTheme, sidebarTheme, footerTheme)=>{
    const theme = {
        main: mainTheme,
        header: {
            ...mainTheme,
            ...headerTheme !== null && headerTheme !== void 0 ? headerTheme : {}
        },
        sidebar: {
            ...mainTheme,
            ...sidebarTheme !== null && sidebarTheme !== void 0 ? sidebarTheme : {}
        },
        footer: {
            ...mainTheme,
            ...footerTheme !== null && footerTheme !== void 0 ? footerTheme : {}
        }
    };
    return theme;
};
function isNavItem(object) {
    return 'path' in object;
}
function isNavGroup(object) {
    return !('path' in object) && 'label' in object && 'children' in object && 'collapsible' in object;
}
function isNavSection(object) {
    return !('path' in object) && !('collapsible' in object) && 'label' in object && 'children' in object;
}
function getNavChildren(item) {
    if (item.children && Array.isArray(item.children)) {
        return item.children;
    }
    return [];
}
const getMarginStyle = (input)=>{
    let margin = {};
    if (!input) return margin;
    if (typeof input === 'number' || typeof input === 'string') {
        margin = typeof input === 'number' ? "".concat(input, "px") : input;
        return {
            top: margin,
            bottom: margin,
            left: margin,
            right: margin
        };
    } else if (Array.isArray(input)) {
        if (input.length === 1) {
            margin = typeof input[0] === 'number' ? "".concat(input[0], "px") : input[0];
            return {
                top: margin,
                bottom: margin,
                left: margin,
                right: margin
            };
        } else if (input.length === 2) {
            const marginX = typeof input[0] === 'number' ? "".concat(input[0], "px") : input[0];
            const marginY = typeof input[1] === 'number' ? "".concat(input[1], "px") : input[1];
            return {
                top: marginY,
                bottom: marginY,
                left: marginX,
                right: marginX
            };
        } else if (input.length === 3 || input.length === 4) {
            const marginTop = typeof input[0] === 'number' ? "".concat(input[0], "px") : input[0];
            const marginRight = typeof input[1] === 'number' ? "".concat(input[1], "px") : input[1];
            const marginBottom = typeof input[2] === 'number' ? "".concat(input[2], "px") : input[2];
            if (input.length === 3) {
                return {
                    top: marginTop,
                    bottom: marginBottom,
                    left: 0,
                    right: marginRight
                };
            } else {
                const marginLeft = typeof input[3] === 'number' ? "".concat(input[3], "px") : input[3];
                return {
                    top: marginTop,
                    bottom: marginBottom,
                    left: marginLeft,
                    right: marginRight
                };
            }
        }
    }
    return {};
};
function isColorCode(value) {
    return typeof value === 'string' && value[0] === '#' && (value.length === 4 || value.length === 7);
}
function isDegree(value) {
    const degArray = value.split('deg');
    return degArray.length === 2 && !Number.isNaN(parseInt(degArray[0]));
}
function getBackgroundColorStyle(colors) {
    if (!colors) return {};
    const foundColors = [];
    let gradientDegree;
    let gradientType = 'linear-gradient';
    colors.forEach((color)=>{
        if (isColorCode(color)) {
            foundColors.push(color);
        } else if (isDegree(color)) {
            gradientDegree = color;
        }
    });
    if (foundColors.length <= 0) return {};
    if (foundColors.length === 1) return {
        backgroundColor: foundColors[0]
    };
    const gradientValue = gradientDegree ? "".concat(gradientDegree, ", ").concat(foundColors.toString()) : foundColors.toString();
    return {
        backgroundImage: "".concat(gradientType, "(").concat(gradientValue, ")")
    };
}
function getBackgroundImageStyle(src) {
    if (!src) return {};
    return {
        background: "url(".concat(src, ") no-repeat center"),
        backgroundSize: 'cover'
    };
}
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboNavbar/components/JumboNavbarProvider/JumboNavbarContext.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JumboNavbarContext",
    ()=>JumboNavbarContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__createTheme$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/styles/createTheme.js [app-client] (ecmascript) <locals> <export default as createTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
const defaultNavbarContext = {
    items: [],
    groupBehaviour: 'collapsible',
    mini: false,
    open: true,
    miniAndClosed: false,
    //TODO: need to provide a default values to the theme
    theme: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__createTheme$3e$__["createTheme"])()
};
const JumboNavbarContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(defaultNavbarContext);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboNavbar/hooks/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useJumboNavGroupSx",
    ()=>useJumboNavGroupSx,
    "useJumboNavItemSx",
    ()=>useJumboNavItemSx,
    "useJumboNavbar",
    ()=>useJumboNavbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$components$2f$JumboNavbarProvider$2f$JumboNavbarContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboNavbar/components/JumboNavbarProvider/JumboNavbarContext.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
;
;
;
function useJumboNavbar() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$components$2f$JumboNavbarProvider$2f$JumboNavbarContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JumboNavbarContext"]);
    //TODO: probably we can fix the activeLocale thing
    function isActive(path) {
        return pathname === path;
    // return pathname === `${locale ? '/' + locale : ''}${path}`;
    }
    return {
        isActive,
        ...context
    };
}
_s(useJumboNavbar, "mpKiIZEayas5DqnyYFiIX7s6Y/o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
function useJumboNavGroupSx() {
    _s1();
    const { miniAndClosed } = useJumboNavbar();
    const menuBefore = {
        left: 0,
        top: 0,
        content: "''",
        position: 'absolute',
        display: 'inline-block',
        width: '4px',
        height: '100%',
        backgroundColor: 'transparent'
    };
    const sx = {
        p: (theme)=>!miniAndClosed ? theme.spacing(1, 3.75) : 0,
        borderRadius: miniAndClosed ? '50%' : '0 24px 24px 0',
        margin: miniAndClosed ? '0 auto' : '0',
        overflow: 'hidden',
        '&:hover': {
            color: (theme)=>{
                var _theme_jumboComponents_JumboNavbar_nav_action, _theme_jumboComponents_JumboNavbar_nav, _theme_jumboComponents_JumboNavbar;
                return (_theme_jumboComponents_JumboNavbar = theme.jumboComponents.JumboNavbar) === null || _theme_jumboComponents_JumboNavbar === void 0 ? void 0 : (_theme_jumboComponents_JumboNavbar_nav = _theme_jumboComponents_JumboNavbar.nav) === null || _theme_jumboComponents_JumboNavbar_nav === void 0 ? void 0 : (_theme_jumboComponents_JumboNavbar_nav_action = _theme_jumboComponents_JumboNavbar_nav.action) === null || _theme_jumboComponents_JumboNavbar_nav_action === void 0 ? void 0 : _theme_jumboComponents_JumboNavbar_nav_action.hover;
            },
            backgroundColor: (theme)=>{
                var _theme_jumboComponents_JumboNavbar_nav_background, _theme_jumboComponents_JumboNavbar_nav, _theme_jumboComponents_JumboNavbar;
                return (_theme_jumboComponents_JumboNavbar = theme.jumboComponents.JumboNavbar) === null || _theme_jumboComponents_JumboNavbar === void 0 ? void 0 : (_theme_jumboComponents_JumboNavbar_nav = _theme_jumboComponents_JumboNavbar.nav) === null || _theme_jumboComponents_JumboNavbar_nav === void 0 ? void 0 : (_theme_jumboComponents_JumboNavbar_nav_background = _theme_jumboComponents_JumboNavbar_nav.background) === null || _theme_jumboComponents_JumboNavbar_nav_background === void 0 ? void 0 : _theme_jumboComponents_JumboNavbar_nav_background.hover;
            },
            ...!miniAndClosed && {
                '&::before': {
                    ...menuBefore,
                    backgroundColor: (theme)=>{
                        var _theme_jumboComponents_JumboNavbar_nav_tick, _theme_jumboComponents_JumboNavbar_nav, _theme_jumboComponents_JumboNavbar;
                        return (_theme_jumboComponents_JumboNavbar = theme.jumboComponents.JumboNavbar) === null || _theme_jumboComponents_JumboNavbar === void 0 ? void 0 : (_theme_jumboComponents_JumboNavbar_nav = _theme_jumboComponents_JumboNavbar.nav) === null || _theme_jumboComponents_JumboNavbar_nav === void 0 ? void 0 : (_theme_jumboComponents_JumboNavbar_nav_tick = _theme_jumboComponents_JumboNavbar_nav.tick) === null || _theme_jumboComponents_JumboNavbar_nav_tick === void 0 ? void 0 : _theme_jumboComponents_JumboNavbar_nav_tick.hover;
                    }
                }
            }
        },
        ...miniAndClosed ? {
            width: 40,
            height: 40,
            justifyContent: 'center'
        } : {
            '&::before': menuBefore
        }
    };
    return sx;
}
_s1(useJumboNavGroupSx, "6cj/uyuWWmXxORhw8m3kd3TQkTw=", false, function() {
    return [
        useJumboNavbar
    ];
});
function useJumboNavItemSx(path) {
    _s2();
    const { miniAndClosed } = useJumboNavbar();
    const menuBefore = {
        left: 0,
        top: 0,
        content: "''",
        position: 'absolute',
        display: 'inline-block',
        width: '4px',
        height: '100%',
        backgroundColor: 'transparent'
    };
    const { isActive } = useJumboNavbar();
    const sx = {
        p: 0,
        overflow: 'hidden',
        borderRadius: miniAndClosed ? '50%' : '0 24px 24px 0',
        margin: miniAndClosed ? '0 auto' : '0',
        ...miniAndClosed ? {
            width: 40,
            height: 40,
            justifyContent: 'center'
        } : {},
        ...!miniAndClosed ? {
            '&::before': menuBefore
        } : {},
        '&:hover': {
            color: (theme)=>{
                var _theme_jumboComponents_JumboNavbar_nav_action, _theme_jumboComponents_JumboNavbar_nav, _theme_jumboComponents_JumboNavbar, _theme_jumboComponents;
                return (_theme_jumboComponents = theme.jumboComponents) === null || _theme_jumboComponents === void 0 ? void 0 : (_theme_jumboComponents_JumboNavbar = _theme_jumboComponents.JumboNavbar) === null || _theme_jumboComponents_JumboNavbar === void 0 ? void 0 : (_theme_jumboComponents_JumboNavbar_nav = _theme_jumboComponents_JumboNavbar.nav) === null || _theme_jumboComponents_JumboNavbar_nav === void 0 ? void 0 : (_theme_jumboComponents_JumboNavbar_nav_action = _theme_jumboComponents_JumboNavbar_nav.action) === null || _theme_jumboComponents_JumboNavbar_nav_action === void 0 ? void 0 : _theme_jumboComponents_JumboNavbar_nav_action.hover;
            },
            backgroundColor: (theme)=>{
                var _theme_jumboComponents_JumboNavbar_nav_background, _theme_jumboComponents_JumboNavbar_nav, _theme_jumboComponents_JumboNavbar, _theme_jumboComponents;
                return (_theme_jumboComponents = theme.jumboComponents) === null || _theme_jumboComponents === void 0 ? void 0 : (_theme_jumboComponents_JumboNavbar = _theme_jumboComponents.JumboNavbar) === null || _theme_jumboComponents_JumboNavbar === void 0 ? void 0 : (_theme_jumboComponents_JumboNavbar_nav = _theme_jumboComponents_JumboNavbar.nav) === null || _theme_jumboComponents_JumboNavbar_nav === void 0 ? void 0 : (_theme_jumboComponents_JumboNavbar_nav_background = _theme_jumboComponents_JumboNavbar_nav.background) === null || _theme_jumboComponents_JumboNavbar_nav_background === void 0 ? void 0 : _theme_jumboComponents_JumboNavbar_nav_background.hover;
            },
            ...!miniAndClosed ? {
                '&::before': {
                    ...menuBefore,
                    backgroundColor: (theme)=>{
                        var _theme_jumboComponents_JumboNavbar_nav_tick, _theme_jumboComponents_JumboNavbar_nav, _theme_jumboComponents_JumboNavbar, _theme_jumboComponents;
                        return (_theme_jumboComponents = theme.jumboComponents) === null || _theme_jumboComponents === void 0 ? void 0 : (_theme_jumboComponents_JumboNavbar = _theme_jumboComponents.JumboNavbar) === null || _theme_jumboComponents_JumboNavbar === void 0 ? void 0 : (_theme_jumboComponents_JumboNavbar_nav = _theme_jumboComponents_JumboNavbar.nav) === null || _theme_jumboComponents_JumboNavbar_nav === void 0 ? void 0 : (_theme_jumboComponents_JumboNavbar_nav_tick = _theme_jumboComponents_JumboNavbar_nav.tick) === null || _theme_jumboComponents_JumboNavbar_nav_tick === void 0 ? void 0 : _theme_jumboComponents_JumboNavbar_nav_tick.hover;
                    }
                }
            } : {}
        },
        ...isActive(path) ? {
            color: (theme)=>{
                var _theme_jumboComponents_JumboNavbar_nav_action, _theme_jumboComponents_JumboNavbar_nav, _theme_jumboComponents_JumboNavbar, _theme_jumboComponents;
                return (_theme_jumboComponents = theme.jumboComponents) === null || _theme_jumboComponents === void 0 ? void 0 : (_theme_jumboComponents_JumboNavbar = _theme_jumboComponents.JumboNavbar) === null || _theme_jumboComponents_JumboNavbar === void 0 ? void 0 : (_theme_jumboComponents_JumboNavbar_nav = _theme_jumboComponents_JumboNavbar.nav) === null || _theme_jumboComponents_JumboNavbar_nav === void 0 ? void 0 : (_theme_jumboComponents_JumboNavbar_nav_action = _theme_jumboComponents_JumboNavbar_nav.action) === null || _theme_jumboComponents_JumboNavbar_nav_action === void 0 ? void 0 : _theme_jumboComponents_JumboNavbar_nav_action.active;
            },
            backgroundColor: (theme)=>{
                var _theme_jumboComponents_JumboNavbar_nav_background, _theme_jumboComponents_JumboNavbar_nav, _theme_jumboComponents_JumboNavbar, _theme_jumboComponents;
                return (_theme_jumboComponents = theme.jumboComponents) === null || _theme_jumboComponents === void 0 ? void 0 : (_theme_jumboComponents_JumboNavbar = _theme_jumboComponents.JumboNavbar) === null || _theme_jumboComponents_JumboNavbar === void 0 ? void 0 : (_theme_jumboComponents_JumboNavbar_nav = _theme_jumboComponents_JumboNavbar.nav) === null || _theme_jumboComponents_JumboNavbar_nav === void 0 ? void 0 : (_theme_jumboComponents_JumboNavbar_nav_background = _theme_jumboComponents_JumboNavbar_nav.background) === null || _theme_jumboComponents_JumboNavbar_nav_background === void 0 ? void 0 : _theme_jumboComponents_JumboNavbar_nav_background.active;
            },
            ...!miniAndClosed ? {
                '&::before': {
                    ...menuBefore,
                    backgroundColor: (theme)=>{
                        var _theme_jumboComponents_JumboNavbar_nav_tick, _theme_jumboComponents_JumboNavbar_nav, _theme_jumboComponents_JumboNavbar, _theme_jumboComponents;
                        return (_theme_jumboComponents = theme.jumboComponents) === null || _theme_jumboComponents === void 0 ? void 0 : (_theme_jumboComponents_JumboNavbar = _theme_jumboComponents.JumboNavbar) === null || _theme_jumboComponents_JumboNavbar === void 0 ? void 0 : (_theme_jumboComponents_JumboNavbar_nav = _theme_jumboComponents_JumboNavbar.nav) === null || _theme_jumboComponents_JumboNavbar_nav === void 0 ? void 0 : (_theme_jumboComponents_JumboNavbar_nav_tick = _theme_jumboComponents_JumboNavbar_nav.tick) === null || _theme_jumboComponents_JumboNavbar_nav_tick === void 0 ? void 0 : _theme_jumboComponents_JumboNavbar_nav_tick.active;
                    }
                }
            } : {}
        } : {}
    };
    return sx;
}
_s2(useJumboNavItemSx, "KXzlNeLoeDlQBS5+7vRBAhi900w=", false, function() {
    return [
        useJumboNavbar,
        useJumboNavbar
    ];
});
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboNavbar/components/JumboNavItem/JumboNavItem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JumboNavItem",
    ()=>JumboNavItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$shared$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/@jumbo/shared/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$shared$2f$components$2f$Link$2f$Link$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/shared/components/Link/Link.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Circle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemButton$2f$ListItemButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/ListItemButton/ListItemButton.js [app-client] (ecmascript) <export default as ListItemButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemIcon$2f$ListItemIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/ListItemIcon/ListItemIcon.js [app-client] (ecmascript) <export default as ListItemIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/ListItemText/ListItemText.js [app-client] (ecmascript) <export default as ListItemText>");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboNavbar/hooks/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$Icon$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/@jumbo/components/Icon/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$Icon$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/Icon/Icon.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function JumboNavItem(param) {
    let { item, isNested } = param;
    _s();
    var _item_path;
    const navSx = (0, __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboNavItemSx"])((_item_path = item === null || item === void 0 ? void 0 : item.path) !== null && _item_path !== void 0 ? _item_path : '');
    const { miniAndClosed } = (0, __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboNavbar"])();
    //TODO: this component depends on this useTranslations
    if (!item) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemButton$2f$ListItemButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemButton$3e$__["ListItemButton"], {
        component: 'li',
        sx: {
            ...navSx
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$shared$2f$components$2f$Link$2f$Link$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
            underline: 'none',
            href: item.path,
            ...item.target ? {
                target: item.target
            } : {},
            sx: {
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                position: 'relative',
                color: 'inherit',
                p: (theme)=>!miniAndClosed ? typeof theme.spacing === 'function' ? theme.spacing(1, 3.75) : 0 : 0,
                ...miniAndClosed ? {
                    justifyContent: 'center'
                } : {}
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemIcon$2f$ListItemIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemIcon$3e$__["ListItemIcon"], {
                    sx: {
                        minWidth: miniAndClosed ? 20 : 32,
                        color: 'inherit'
                    },
                    children: isNested ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        sx: {
                            fontSize: 6,
                            ml: 1
                        }
                    }, void 0, false, {
                        fileName: "[project]/@jumbo/components/JumboNavbar/components/JumboNavItem/JumboNavItem.tsx",
                        lineNumber: 53,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$Icon$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        name: item.icon,
                        sx: {
                            fontSize: 20
                        }
                    }, void 0, false, {
                        fileName: "[project]/@jumbo/components/JumboNavbar/components/JumboNavItem/JumboNavItem.tsx",
                        lineNumber: 55,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/@jumbo/components/JumboNavbar/components/JumboNavItem/JumboNavItem.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                !miniAndClosed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__["ListItemText"], {
                    primary: item.label,
                    sx: {
                        m: 0,
                        '& .MuiTypography-root': {
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        }
                    }
                }, void 0, false, {
                    fileName: "[project]/@jumbo/components/JumboNavbar/components/JumboNavItem/JumboNavItem.tsx",
                    lineNumber: 59,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/@jumbo/components/JumboNavbar/components/JumboNavItem/JumboNavItem.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/@jumbo/components/JumboNavbar/components/JumboNavItem/JumboNavItem.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(JumboNavItem, "3XMQjZkCI+Bt8mTKsKevgHUjOXw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboNavItemSx"],
        __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboNavbar"]
    ];
});
_c = JumboNavItem;
;
var _c;
__turbopack_context__.k.register(_c, "JumboNavItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboNavbar/components/JumboNavSection/JumboNavSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JumboNavSection",
    ()=>JumboNavSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/utilities/helpers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Divider/Divider.js [app-client] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListSubheader$2f$ListSubheader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListSubheader$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/ListSubheader/ListSubheader.js [app-client] (ecmascript) <export default as ListSubheader>");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboNavbar/components/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$components$2f$JumboNavIdentifier$2f$JumboNavIdentifier$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboNavbar/components/JumboNavIdentifier/JumboNavIdentifier.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboNavbar/hooks/index.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function JumboNavSection(param) {
    let { item, isFirstSection } = param;
    _s();
    //TODO: this component depends on this useTranslations
    const { miniAndClosed } = (0, __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboNavbar"])();
    if (!item) return null;
    const subMenus = (0, __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNavChildren"])(item);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            miniAndClosed ? !isFirstSection && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                sx: {
                    mx: 2,
                    my: 1
                }
            }, void 0, false, {
                fileName: "[project]/@jumbo/components/JumboNavbar/components/JumboNavSection/JumboNavSection.tsx",
                lineNumber: 22,
                columnNumber: 44
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListSubheader$2f$ListSubheader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListSubheader$3e$__["ListSubheader"], {
                component: "li",
                disableSticky: true,
                sx: {
                    fontSize: '80%',
                    fontWeight: '400',
                    lineHeight: 'normal',
                    textTransform: 'uppercase',
                    bgcolor: 'transparent',
                    p: (theme)=>theme.spacing(3.75, 3.75, 1.875)
                },
                children: item.label
            }, void 0, false, {
                fileName: "[project]/@jumbo/components/JumboNavbar/components/JumboNavSection/JumboNavSection.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this),
            subMenus && subMenus.map((child, index)=>{
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$components$2f$JumboNavIdentifier$2f$JumboNavIdentifier$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JumboNavIdentifier"], {
                    item: child
                }, index, false, {
                    fileName: "[project]/@jumbo/components/JumboNavbar/components/JumboNavSection/JumboNavSection.tsx",
                    lineNumber: 40,
                    columnNumber: 18
                }, this);
            })
        ]
    }, void 0, true);
}
_s(JumboNavSection, "6cj/uyuWWmXxORhw8m3kd3TQkTw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboNavbar"]
    ];
});
_c = JumboNavSection;
;
var _c;
__turbopack_context__.k.register(_c, "JumboNavSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboNavbar/components/JumboNavSection/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$components$2f$JumboNavSection$2f$JumboNavSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboNavbar/components/JumboNavSection/JumboNavSection.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboNavbar/components/JumboNavIdentifier/JumboNavIdentifier.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JumboNavIdentifier",
    ()=>JumboNavIdentifier
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/utilities/helpers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboNavbar/components/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$components$2f$JumboNavGroup$2f$JumboNavGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboNavbar/components/JumboNavGroup/JumboNavGroup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$components$2f$JumboNavItem$2f$JumboNavItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboNavbar/components/JumboNavItem/JumboNavItem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$components$2f$JumboNavSection$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboNavbar/components/JumboNavSection/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$components$2f$JumboNavSection$2f$JumboNavSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboNavbar/components/JumboNavSection/JumboNavSection.tsx [app-client] (ecmascript)");
;
;
;
;
function JumboNavIdentifier(param) {
    let { item, isNested = false, isFirstSection = false } = param;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNavGroup"])(item)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$components$2f$JumboNavGroup$2f$JumboNavGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JumboNavGroup"], {
            item: item
        }, void 0, false, {
            fileName: "[project]/@jumbo/components/JumboNavbar/components/JumboNavIdentifier/JumboNavIdentifier.tsx",
            lineNumber: 19,
            columnNumber: 12
        }, this);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNavSection"])(item)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$components$2f$JumboNavSection$2f$JumboNavSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JumboNavSection"], {
            item: item,
            isFirstSection: isFirstSection
        }, void 0, false, {
            fileName: "[project]/@jumbo/components/JumboNavbar/components/JumboNavIdentifier/JumboNavIdentifier.tsx",
            lineNumber: 21,
            columnNumber: 12
        }, this);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNavItem"])(item)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$components$2f$JumboNavItem$2f$JumboNavItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JumboNavItem"], {
            item: item,
            isNested: isNested
        }, void 0, false, {
            fileName: "[project]/@jumbo/components/JumboNavbar/components/JumboNavIdentifier/JumboNavIdentifier.tsx",
            lineNumber: 23,
            columnNumber: 12
        }, this);
    }
    return null;
}
_c = JumboNavIdentifier;
;
var _c;
__turbopack_context__.k.register(_c, "JumboNavIdentifier");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboNavbar/components/JumboNavGroup/components/SubMenus/SubMenus.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SubMenus",
    ()=>SubMenus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$List$2f$List$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/List/List.js [app-client] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboNavbar/components/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$components$2f$JumboNavIdentifier$2f$JumboNavIdentifier$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboNavbar/components/JumboNavIdentifier/JumboNavIdentifier.tsx [app-client] (ecmascript)");
;
;
;
function SubMenus(param) {
    let { items, miniAndClosed } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$List$2f$List$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
        disablePadding: true,
        children: items.map((child, index)=>{
            const eventKey = new Date().valueOf();
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$components$2f$JumboNavIdentifier$2f$JumboNavIdentifier$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JumboNavIdentifier"], {
                item: child,
                isNested: true
            }, "".concat(eventKey).concat(index), false, {
                fileName: "[project]/@jumbo/components/JumboNavbar/components/JumboNavGroup/components/SubMenus/SubMenus.tsx",
                lineNumber: 16,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/@jumbo/components/JumboNavbar/components/JumboNavGroup/components/SubMenus/SubMenus.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = SubMenus;
;
var _c;
__turbopack_context__.k.register(_c, "SubMenus");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboNavbar/components/JumboNavGroup/components/SubMenus/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$components$2f$JumboNavGroup$2f$components$2f$SubMenus$2f$SubMenus$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboNavbar/components/JumboNavGroup/components/SubMenus/SubMenus.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboNavbar/components/JumboNavGroup/components/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$components$2f$JumboNavGroup$2f$components$2f$SubMenus$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboNavbar/components/JumboNavGroup/components/SubMenus/index.ts [app-client] (ecmascript) <locals>");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboNavbar/components/JumboNavGroup/components/SubMenusCollapsible/SubMenusCollapsible.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SubMenusCollapsible",
    ()=>SubMenusCollapsible
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Collapse$2f$Collapse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Collapse$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Collapse/Collapse.js [app-client] (ecmascript) <export default as Collapse>");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$components$2f$JumboNavGroup$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboNavbar/components/JumboNavGroup/components/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$components$2f$JumboNavGroup$2f$components$2f$SubMenus$2f$SubMenus$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboNavbar/components/JumboNavGroup/components/SubMenus/SubMenus.tsx [app-client] (ecmascript)");
;
;
;
function SubMenusCollapsible(param) {
    let { items, open, miniAndClosed } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Collapse$2f$Collapse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Collapse$3e$__["Collapse"], {
        component: 'li',
        in: open,
        timeout: "auto",
        unmountOnExit: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$components$2f$JumboNavGroup$2f$components$2f$SubMenus$2f$SubMenus$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubMenus"], {
            items: items,
            miniAndClosed: miniAndClosed
        }, void 0, false, {
            fileName: "[project]/@jumbo/components/JumboNavbar/components/JumboNavGroup/components/SubMenusCollapsible/SubMenusCollapsible.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/@jumbo/components/JumboNavbar/components/JumboNavGroup/components/SubMenusCollapsible/SubMenusCollapsible.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = SubMenusCollapsible;
;
var _c;
__turbopack_context__.k.register(_c, "SubMenusCollapsible");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboNavbar/components/JumboNavGroup/components/SubMenusCollapsible/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$components$2f$JumboNavGroup$2f$components$2f$SubMenusCollapsible$2f$SubMenusCollapsible$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboNavbar/components/JumboNavGroup/components/SubMenusCollapsible/SubMenusCollapsible.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboNavbar/components/JumboNavGroup/components/SubMenusPopover/SubMenusPopover.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SubMenusPopover",
    ()=>SubMenusPopover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Popover$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Popover$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Popover/Popover.js [app-client] (ecmascript) <export default as Popover>");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$components$2f$JumboNavGroup$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboNavbar/components/JumboNavGroup/components/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$components$2f$JumboNavGroup$2f$components$2f$SubMenus$2f$SubMenus$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboNavbar/components/JumboNavGroup/components/SubMenus/SubMenus.tsx [app-client] (ecmascript)");
;
;
;
function SubMenusPopover(param) {
    let { items, anchorEl, onClose, miniAndClosed } = param;
    const open = Boolean(anchorEl);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Popover$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Popover$3e$__["Popover"], {
        id: "mouse-over-popover",
        sx: {
            pointerEvents: 'none'
        },
        open: open,
        anchorEl: anchorEl,
        anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
        },
        transformOrigin: {
            vertical: 'top',
            horizontal: 'left'
        },
        onClose: onClose,
        disableRestoreFocus: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$components$2f$JumboNavGroup$2f$components$2f$SubMenus$2f$SubMenus$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubMenus"], {
            items: items,
            miniAndClosed: miniAndClosed
        }, void 0, false, {
            fileName: "[project]/@jumbo/components/JumboNavbar/components/JumboNavGroup/components/SubMenusPopover/SubMenusPopover.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/@jumbo/components/JumboNavbar/components/JumboNavGroup/components/SubMenusPopover/SubMenusPopover.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = SubMenusPopover;
;
var _c;
__turbopack_context__.k.register(_c, "SubMenusPopover");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboNavbar/components/JumboNavGroup/components/SubMenusPopover/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$components$2f$JumboNavGroup$2f$components$2f$SubMenusPopover$2f$SubMenusPopover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboNavbar/components/JumboNavGroup/components/SubMenusPopover/SubMenusPopover.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboNavbar/components/JumboNavGroup/JumboNavGroup.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JumboNavGroup",
    ()=>JumboNavGroup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$Icon$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/@jumbo/components/Icon/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$Icon$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/Icon/Icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$shared$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/@jumbo/shared/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$shared$2f$components$2f$Div$2f$Div$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/shared/components/Div/Div.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/utilities/helpers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ArrowDropDown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/ArrowDropDown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ArrowRight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/ArrowRight.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemButton$2f$ListItemButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/ListItemButton/ListItemButton.js [app-client] (ecmascript) <export default as ListItemButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemIcon$2f$ListItemIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/ListItemIcon/ListItemIcon.js [app-client] (ecmascript) <export default as ListItemIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/ListItemText/ListItemText.js [app-client] (ecmascript) <export default as ListItemText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboNavbar/hooks/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$components$2f$JumboNavGroup$2f$components$2f$SubMenusCollapsible$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboNavbar/components/JumboNavGroup/components/SubMenusCollapsible/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$components$2f$JumboNavGroup$2f$components$2f$SubMenusCollapsible$2f$SubMenusCollapsible$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboNavbar/components/JumboNavGroup/components/SubMenusCollapsible/SubMenusCollapsible.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$components$2f$JumboNavGroup$2f$components$2f$SubMenusPopover$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboNavbar/components/JumboNavGroup/components/SubMenusPopover/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$components$2f$JumboNavGroup$2f$components$2f$SubMenusPopover$2f$SubMenusPopover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboNavbar/components/JumboNavGroup/components/SubMenusPopover/SubMenusPopover.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
;
function JumboNavGroup(param) {
    let { item } = param;
    _s();
    const [open, setOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [anchorEl, setAnchorEl] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    const { miniAndClosed, groupBehaviour } = (0, __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboNavbar"])();
    const navGroupSx = (0, __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboNavGroupSx"])();
    const handlePopoverOpen = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "JumboNavGroup.useCallback[handlePopoverOpen]": (event)=>{
            setAnchorEl(event.currentTarget);
        }
    }["JumboNavGroup.useCallback[handlePopoverOpen]"], []);
    const handlePopoverClose = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "JumboNavGroup.useCallback[handlePopoverClose]": ()=>{
            setAnchorEl(null);
        }
    }["JumboNavGroup.useCallback[handlePopoverClose]"], []);
    //TODO: this component depends on this useTranslations
    if (!item) return null;
    const subMenus = (0, __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNavChildren"])(item);
    function renderItem(navItem) {
        if (miniAndClosed) {
            if (!navItem.icon) return null;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemIcon$2f$ListItemIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemIcon$3e$__["ListItemIcon"], {
                sx: {
                    minWidth: miniAndClosed ? 20 : 32,
                    color: 'inherit'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$Icon$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                    name: navItem.icon,
                    fontSize: 'small'
                }, void 0, false, {
                    fileName: "[project]/@jumbo/components/JumboNavbar/components/JumboNavGroup/JumboNavGroup.tsx",
                    lineNumber: 56,
                    columnNumber: 12
                }, this)
            }, void 0, false, {
                fileName: "[project]/@jumbo/components/JumboNavbar/components/JumboNavGroup/JumboNavGroup.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$shared$2f$components$2f$Div$2f$Div$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Div"], {
                    sx: {
                        position: 'absolute',
                        left: 5,
                        display: 'inline-flex',
                        top: '50%',
                        transform: 'translateY(-50%)'
                    },
                    children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ArrowDropDown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/@jumbo/components/JumboNavbar/components/JumboNavGroup/JumboNavGroup.tsx",
                        lineNumber: 72,
                        columnNumber: 19
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ArrowRight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/@jumbo/components/JumboNavbar/components/JumboNavGroup/JumboNavGroup.tsx",
                        lineNumber: 72,
                        columnNumber: 43
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/@jumbo/components/JumboNavbar/components/JumboNavGroup/JumboNavGroup.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemIcon$2f$ListItemIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemIcon$3e$__["ListItemIcon"], {
                    sx: {
                        color: 'inherit',
                        minWidth: 32
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$Icon$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        name: navItem.icon,
                        fontSize: 'small'
                    }, void 0, false, {
                        fileName: "[project]/@jumbo/components/JumboNavbar/components/JumboNavGroup/JumboNavGroup.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/@jumbo/components/JumboNavbar/components/JumboNavGroup/JumboNavGroup.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__["ListItemText"], {
                    primary: navItem.label,
                    sx: {
                        m: 0,
                        '& .MuiTypography-root': {
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        }
                    }
                }, void 0, false, {
                    fileName: "[project]/@jumbo/components/JumboNavbar/components/JumboNavGroup/JumboNavGroup.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/@jumbo/components/JumboNavbar/components/JumboNavGroup/JumboNavGroup.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemButton$2f$ListItemButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemButton$3e$__["ListItemButton"], {
                component: 'li',
                onClick: ()=>setOpen(!open),
                onMouseEnter: handlePopoverOpen,
                onMouseLeave: handlePopoverClose,
                sx: {
                    ...navGroupSx
                },
                children: renderItem(item)
            }, void 0, false, {
                fileName: "[project]/@jumbo/components/JumboNavbar/components/JumboNavGroup/JumboNavGroup.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            subMenus && groupBehaviour === 'collapsible' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$components$2f$JumboNavGroup$2f$components$2f$SubMenusCollapsible$2f$SubMenusCollapsible$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubMenusCollapsible"], {
                items: subMenus,
                open: open,
                miniAndClosed: miniAndClosed
            }, void 0, false, {
                fileName: "[project]/@jumbo/components/JumboNavbar/components/JumboNavGroup/JumboNavGroup.tsx",
                lineNumber: 104,
                columnNumber: 9
            }, this),
            subMenus && groupBehaviour === 'popover' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$components$2f$JumboNavGroup$2f$components$2f$SubMenusPopover$2f$SubMenusPopover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubMenusPopover"], {
                items: subMenus,
                anchorEl: anchorEl,
                onClose: handlePopoverClose,
                miniAndClosed: miniAndClosed
            }, void 0, false, {
                fileName: "[project]/@jumbo/components/JumboNavbar/components/JumboNavGroup/JumboNavGroup.tsx",
                lineNumber: 111,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/@jumbo/components/JumboNavbar/components/JumboNavGroup/JumboNavGroup.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_s(JumboNavGroup, "W25ybrEQ5pPYI8lnH7SEwGGuKLw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboNavbar"],
        __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboNavGroupSx"]
    ];
});
_c = JumboNavGroup;
;
var _c;
__turbopack_context__.k.register(_c, "JumboNavGroup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboNavbar/components/JumboNavGroup/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$components$2f$JumboNavGroup$2f$JumboNavGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboNavbar/components/JumboNavGroup/JumboNavGroup.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboNavbar/components/JumboNavIdentifier/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$components$2f$JumboNavIdentifier$2f$JumboNavIdentifier$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboNavbar/components/JumboNavIdentifier/JumboNavIdentifier.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboNavbar/components/JumboNavItem/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$components$2f$JumboNavItem$2f$JumboNavItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboNavbar/components/JumboNavItem/JumboNavItem.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboNavbar/components/JumboNavbarProvider/JumboNavbarProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JumboNavbarProvider",
    ()=>JumboNavbarProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboTheme/hooks/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$List$2f$List$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/List/List.js [app-client] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboNavbar/components/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$components$2f$JumboNavIdentifier$2f$JumboNavIdentifier$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboNavbar/components/JumboNavIdentifier/JumboNavIdentifier.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$components$2f$JumboNavbarProvider$2f$JumboNavbarContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboNavbar/components/JumboNavbarProvider/JumboNavbarContext.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/utilities/helpers.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function JumboNavbarProvider(param) {
    let { items = [], mini = false, open = true, groupBehaviour = 'collapsible', theme } = param;
    _s();
    const miniAndClosed = !!mini && !open;
    const { theme: jumboTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboTheme"])();
    const contextValue = {
        items,
        miniAndClosed,
        theme: theme || jumboTheme,
        groupBehaviour,
        mini,
        open
    };
    let isFirstSection = true;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$components$2f$JumboNavbarProvider$2f$JumboNavbarContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JumboNavbarContext"].Provider, {
        value: contextValue,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$List$2f$List$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
            disablePadding: true,
            sx: {
                mr: miniAndClosed ? 0 : 2,
                pb: 2
            },
            children: items.map((item, index)=>{
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$utilities$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNavSection"])(item) && isFirstSection === true) {
                    isFirstSection = false;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$components$2f$JumboNavIdentifier$2f$JumboNavIdentifier$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JumboNavIdentifier"], {
                        item: item,
                        isFirstSection: true
                    }, index, false, {
                        fileName: "[project]/@jumbo/components/JumboNavbar/components/JumboNavbarProvider/JumboNavbarProvider.tsx",
                        lineNumber: 46,
                        columnNumber: 21
                    }, this);
                }
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$components$2f$JumboNavIdentifier$2f$JumboNavIdentifier$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JumboNavIdentifier"], {
                    item: item
                }, index, false, {
                    fileName: "[project]/@jumbo/components/JumboNavbar/components/JumboNavbarProvider/JumboNavbarProvider.tsx",
                    lineNumber: 48,
                    columnNumber: 19
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/@jumbo/components/JumboNavbar/components/JumboNavbarProvider/JumboNavbarProvider.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/@jumbo/components/JumboNavbar/components/JumboNavbarProvider/JumboNavbarProvider.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_s(JumboNavbarProvider, "4NScjPBJ+iNzlAqqYLAXPqTbuW8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboTheme"]
    ];
});
_c = JumboNavbarProvider;
;
var _c;
__turbopack_context__.k.register(_c, "JumboNavbarProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboNavbar/components/JumboNavbarProvider/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$components$2f$JumboNavbarProvider$2f$JumboNavbarProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboNavbar/components/JumboNavbarProvider/JumboNavbarProvider.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboNavbar/components/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$components$2f$JumboNavGroup$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboNavbar/components/JumboNavGroup/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$components$2f$JumboNavIdentifier$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboNavbar/components/JumboNavIdentifier/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$components$2f$JumboNavItem$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboNavbar/components/JumboNavItem/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$components$2f$JumboNavSection$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboNavbar/components/JumboNavSection/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$components$2f$JumboNavbarProvider$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboNavbar/components/JumboNavbarProvider/index.ts [app-client] (ecmascript) <locals>");
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboNavbar/JumboNavbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JumboNavbar",
    ()=>JumboNavbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboNavbar/components/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$components$2f$JumboNavbarProvider$2f$JumboNavbarProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboNavbar/components/JumboNavbarProvider/JumboNavbarProvider.tsx [app-client] (ecmascript)");
'use client';
;
;
function JumboNavbar() {
    let props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
        items: [],
        groupBehaviour: 'collapsible',
        mini: false,
        open: true
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboNavbar$2f$components$2f$JumboNavbarProvider$2f$JumboNavbarProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JumboNavbarProvider"], {
        ...props
    }, void 0, false, {
        fileName: "[project]/@jumbo/components/JumboNavbar/JumboNavbar.tsx",
        lineNumber: 23,
        columnNumber: 10
    }, this);
}
_c = JumboNavbar;
;
var _c;
__turbopack_context__.k.register(_c, "JumboNavbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboScrollbar/JumboScrollbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JumboScrollbar",
    ()=>JumboScrollbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$custom$2d$scrollbars$2d$2$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-custom-scrollbars-2/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboTheme/hooks/index.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function JumboScrollbar(props) {
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboTheme"])();
    const { direction, renderTrackVertical, renderTrackHorizontal, disable = false, children, ...restProps } = props;
    const scrollbarDirection = direction !== null && direction !== void 0 ? direction : 'vertical';
    const scrollbarDisable = disable !== null && disable !== void 0 ? disable : false;
    if (scrollbarDisable) {
        return children !== null && children !== void 0 ? children : null;
    }
    const renderTrackProp = scrollbarDirection === 'vertical' ? {
        renderTrackVertical: (props)=>{
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    ...props.style,
                    top: '2px',
                    bottom: '2px',
                    right: '2px',
                    borderRadius: '3px',
                    ...theme.direction === 'rtl' ? {
                        right: 'auto',
                        left: '2px'
                    } : {}
                },
                ...props
            }, void 0, false, {
                fileName: "[project]/@jumbo/components/JumboScrollbar/JumboScrollbar.tsx",
                lineNumber: 33,
                columnNumber: 15
            }, this);
        }
    } : {
        renderTrackHorizontal: (props)=>{
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ...props,
                style: {
                    ...props.style,
                    left: '50%',
                    width: '100px',
                    top: 0,
                    transform: 'translateX(-50%)'
                }
            }, void 0, false, {
                fileName: "[project]/@jumbo/components/JumboScrollbar/JumboScrollbar.tsx",
                lineNumber: 52,
                columnNumber: 15
            }, this);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$custom$2d$scrollbars$2d$2$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        universal: true,
        autoHide: true,
        autoHideTimeout: 2000,
        renderView: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ...props,
                style: theme.direction === 'rtl' ? {
                    ...props === null || props === void 0 ? void 0 : props.style,
                    marginLeft: '-17px',
                    marginRight: 0
                } : {
                    ...props === null || props === void 0 ? void 0 : props.style
                }
            }, void 0, false, {
                fileName: "[project]/@jumbo/components/JumboScrollbar/JumboScrollbar.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, void 0),
        ...restProps,
        children: children
    }, void 0, false, {
        fileName: "[project]/@jumbo/components/JumboScrollbar/JumboScrollbar.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_s(JumboScrollbar, "gy3E4/c61kMZfKPY64pVK1XE2kM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJumboTheme"]
    ];
});
_c = JumboScrollbar;
;
var _c;
__turbopack_context__.k.register(_c, "JumboScrollbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/@jumbo/components/JumboTheme/JumboTheme.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JumboTheme",
    ()=>JumboTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/styles/ThemeProvider.js [app-client] (ecmascript) <export default as ThemeProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__createTheme$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/styles/createTheme.js [app-client] (ecmascript) <locals> <export default as createTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$locale$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/locale/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboTheme/components/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$components$2f$JumboThemeFooter$2f$JumboThemeFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboTheme/components/JumboThemeFooter/JumboThemeFooter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$components$2f$JumboThemeHeader$2f$JumboThemeHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboTheme/components/JumboThemeHeader/JumboThemeHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$components$2f$JumboThemeSidebar$2f$JumboThemeSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboTheme/components/JumboThemeSidebar/JumboThemeSidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$JumboThemeContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/@jumbo/components/JumboTheme/JumboThemeContext.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function JumboTheme(param) {
    let { children, init } = param;
    _s();
    const [theme, setTheme] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__createTheme$3e$__["createTheme"])(init.main));
    const [muiLocale, setMuiLocale] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$locale$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enUS"]);
    const updateTheme = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "JumboTheme.useCallback[updateTheme]": (options)=>{
            setTheme((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__createTheme$3e$__["createTheme"])({
                ...theme,
                ...options
            }, muiLocale));
        }
    }["JumboTheme.useCallback[updateTheme]"], [
        theme,
        muiLocale
    ]);
    const themeContextValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "JumboTheme.useMemo[themeContextValue]": ()=>({
                theme,
                muiLocale,
                setTheme: updateTheme,
                setMuiLocale
            })
    }["JumboTheme.useMemo[themeContextValue]"], [
        theme,
        muiLocale,
        updateTheme
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$JumboThemeContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JumboThemeContext"].Provider, {
        value: themeContextValue,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__["ThemeProvider"], {
            theme: theme,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$components$2f$JumboThemeHeader$2f$JumboThemeHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JumboThemeHeader"], {
                init: init.header,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$components$2f$JumboThemeSidebar$2f$JumboThemeSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JumboThemeSidebar"], {
                    init: init.sidebar,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f40$jumbo$2f$components$2f$JumboTheme$2f$components$2f$JumboThemeFooter$2f$JumboThemeFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JumboThemeFooter"], {
                        init: init.footer,
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/@jumbo/components/JumboTheme/JumboTheme.tsx",
                        lineNumber: 109,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/@jumbo/components/JumboTheme/JumboTheme.tsx",
                    lineNumber: 108,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/@jumbo/components/JumboTheme/JumboTheme.tsx",
                lineNumber: 107,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/@jumbo/components/JumboTheme/JumboTheme.tsx",
            lineNumber: 106,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/@jumbo/components/JumboTheme/JumboTheme.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
_s(JumboTheme, "PVkFr54aCo58uquM4/a5wdSl0rQ=");
_c = JumboTheme;
;
var _c;
__turbopack_context__.k.register(_c, "JumboTheme");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_eab56969._.js.map