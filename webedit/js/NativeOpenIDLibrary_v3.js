var NativeOpenIDLibraryList = {
    [1001]: function () {
        window.fileOperations
            .openLocalFile(["*/*", "text/lua"])
            .then(
                /**@param {string | Error}e*/ (e) =>
                    "string" == typeof e
                        ? window.fileOperations.replaceSessionTxt(e)
                        : window.fileOperations.msgBox(
                              "打开本地文件错误！",
                              e.stack,
                              "color:red",
                              "color:red",
                              false,
                          ),
            );
    },
    [1002]: function () {
        window.fileOperations
            .saveLocalFile(
                window.fileOperations.get(),
                window.operatingFn + ".lua",
                "text/lua",
            )
            .then(
                (e) =>
                    e instanceof Error &&
                    window.fileOperations.msgBox("保存本地文件错误！", e.stack,
                        "color:red",
                        "color:red",
                        false),
            );
    },
    [1003]: function () {
        // clear this session text
        window.confirm(
            "你确定要清空代码吗？\nAre you sure to clear the code?",
        ) && window.fileOperations.replaceSessionTxt("");
    },
    [4001]: function () {
        window.open("https://dev-wiki.mini1.cn/ugc-wiki/", "_blank");
    },
    [4002]: function () {
        window.open("https://mini1.feishu.cn/share/base/form/shrcnIDLRuNzrnbRyhb4kPv4Lhl", "_blank");
    },
};
var NativeOpenIDLibrary = function (i) {
    return NativeOpenIDLibraryList[i] && window.NativeOpenIDLibraryList[i]();
};
