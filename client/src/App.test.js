"use strict";
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var App_1 = require("./App");
test('renders learn react link', function () {
    (0, react_1.render)((0, jsx_runtime_1.jsx)(App_1["default"], {}));
    var linkElement = react_1.screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
