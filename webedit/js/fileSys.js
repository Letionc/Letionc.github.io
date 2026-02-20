//File System
!function (noRUN) {
    if (noRUN) return;
    var body = $s("body");
    var filesSpace = new IndexedDBUtils("files", 2);
    var fileWrapper = $s("#file-area");
    var fileList = $s(".file-list");
    var editorApp = $s("#app");
    var loading = $s("#loadPage");
    var fnInput = $s("#fn");
    var updated = $s("#updated");
    window.operatingFn = 0;
    var fileArray = {};
    var sessionAreaText = "";
    var LS = localStorage;
    var ttl = Array.from(
        new Array(8),
        (e) => "0123456789abcdef"[Math.floor(Math.random() * 16)],
    ).join("");
    window.addEventListener("beforeunload", (e) => {
        LS.removeItem("_" + operatingFn);
    });
    document.title = `${ttl} session`;
    class fileOperationsBaseClass{
        /**
         * 调用浏览器让用户从电脑/手机选择文件，并读取文件内容
         * @param {string[]} [acceptTypes] - 可选，指定可选择的文件类型，如 ['text/*', 'application/json']
         * @return {Promise<string | Error>} 文件内容字符串，若失败则返回 Error 对象
         */
        openLocalFile(acceptTypes = ["*/*"]) {
            return new Promise((resolve) => {
                try {
                    const fileInput = document.createElement("input");
                    fileInput.type = "file";
                    fileInput.style.display = "none";
                    fileInput.accept = acceptTypes.join(",");
                    document.body.appendChild(fileInput);

                    fileInput.addEventListener("change", async (e) => {
                        const file = e.target.files?.[0];
                        document.body.removeChild(fileInput);

                        if (!file) {
                            resolve(new Error("未选择任何文件"));
                            return;
                        }

                        try {
                            const reader = new FileReader();
                            reader.onload = () => resolve(reader.result);
                            reader.onerror = () =>
                                resolve(
                                    new Error(
                                        `读取文件失败: ${reader.error?.message}`,
                                    ),
                                );
                            reader.readAsText(file);
                        } catch (err) {
                            resolve(new Error(`读取文件异常: ${err.message}`));
                        }
                    });

                    fileInput.click();
                } catch (err) {
                    resolve(new Error(`打开文件选择器失败: ${err.message}`));
                }
            });
        }
        /**
         * 调用浏览器让用户将内容保存为文件到电脑/手机
         * @param {string} content - 要保存的文件内容
         * @param {string} fileName - 建议的文件名（如 'data.txt'）
         * @param {string} [mimeType='text/plain'] - 文件MIME类型
         * @return {Promise<undefined | Error>} 成功返回undefined，失败返回Error对象
         */
        saveLocalFile(content, fileName, mimeType = "text/plain") {
            return new Promise((resolve) => {
                try {
                    if (!content || !fileName) {
                        resolve(new Error("内容和文件名不能为空"));
                        return;
                    }

                    const blob = new Blob([content], { type: mimeType });
                    const downloadLink = document.createElement("a");
                    downloadLink.href = URL.createObjectURL(blob);
                    downloadLink.download = fileName;
                    downloadLink.style.display = "none";
                    document.body.appendChild(downloadLink);

                    downloadLink.click();
                    document.body.removeChild(downloadLink);
                    URL.revokeObjectURL(downloadLink.href);

                    resolve();
                } catch (err) {
                    resolve(new Error(`保存文件失败: ${err.message}`));
                }
            });
        }
        replaceSessionTxt(content = "") {
            aceEditor.selectAll();
            aceEditor.insert(content);
        }
        add(fn) {
            return $c("li")
                .intext(fn)
                .THEN((a) => {
                    a.listen("click", function (e) {
                        fileOperations.saveFile();
                        var q = a.INTEXT();
                        var t = "_" + q;
                        if (q == operatingFn) {
                            fileOperations.msgBox(
                                "切换失败！",
                                `文件已在本窗口打开`,
                                "color:red",
                                "color:red",
                            );
                            return;
                        }
                        if (LS[t]) {
                            fileOperations.msgBox(
                                "切换失败！",
                                `文件已在窗口${LS[t]}打开<br>再次点击强制打开`,
                                "color:red",
                                "color:red",
                            );
                            LS.removeItem("_" + a.INTEXT());
                            return;
                        }
                        LS.removeItem("_" + operatingFn);
                        document.title = `${ttl} ${(operatingFn = q)}`;
                        aceEditor.selectAll();
                        aceEditor.insert(fileArray[operatingFn]);
                        fnInput.attr("value", operatingFn);
                        LS[t] = ttl;
                    });
                })
                .follow(fileList);
        }
        get() {
            return window.aceEditor
                ? window.aceEditor.session.doc.$lines.join("\n")
                : "";
        }
        saveFile() {
            var a = operatingFn,
                b = fileOperations.get();
            if (updated.INTEXT() == "已保存") return;
            if (a == 0) {
                sessionAreaText = b;
            } else {
                fileArray[a] = b;
                filesSpace.update("0", { fn: a, doc: b }).catch((err) => {
                    updated.style("color", "red").intext("出错误");
                    fileOperations.msgBox(
                        "保存失败！",
                        err,
                        "color:red",
                        "color:red",
                    );
                });
            }
            updated.style("color", "green").intext("已保存");
        }
        addFile(fn) {
            if (Object.keys(fileArray).indexOf(fn) != -1)
                fileOperations.msgBox(
                    "创建失败！",
                    "新文件名与其他文件不能重复",
                    "color:red",
                    "color:red",
                );
            filesSpace.create("0", { fn: fn, doc: "" }).catch((err) => {
                fileOperations.msgBox(
                    "创建失败！",
                    err,
                    "color:red",
                    "color:red",
                );
            });
            fileArray[fn] = "";
            fileOperations.add(fn);
        }
        rnmFile(fn1, fn2) {
            if (Object.keys(fileArray).indexOf(fn2) != -1)
                return fileOperations.msgBox(
                    "重命名失败！",
                    "文件名与其他文件不能重复",
                    "color:red",
                    "color:red",
                );
            if (fn1 == fn2)
                return fileOperations.msgBox(
                    "重命名失败！",
                    "文件名前后不能重复",
                    "color:red",
                    "color:red",
                );
            filesSpace
                .create("0", { fn: fn2, doc: fileArray[fn1] })
                .catch((err) => {
                    return fileOperations.msgBox(
                        "重命名失败！(步骤1)",
                        err,
                        "color:red",
                        "color:red",
                    );
                });
            var unsafe = false;
            filesSpace.delete("0", fn1).catch((err) => {
                unsafe = true;
                return fileOperations.msgBox(
                    "重命名失败！(步骤2)",
                    err,
                    "color:red",
                    "color:red",
                );
            });
            if (unsafe) return;
            try {
                fileArray[fn2] = fileArray[fn1];
                delete fileArray[fn1];
            } catch (err) {
                unsafe = true;
                return fileOperations.msgBox(
                    "重命名失败！(步骤3)",
                    err,
                    "color:red",
                    "color:red",
                );
            }
            if (unsafe) return;
            var a = $S(".file-list>li:not([data-sp])");
            a = a[a.map((e) => e.INTEXT()).indexOf(fn1)];
            if (a) a.intext(fn2);
            else
                return fileOperations.msgBox(
                    "重命名失败！(步骤4)",
                    "你看这文件能被点击吗？它喝隐身药水了你知道吗？？？",
                    "color:red",
                    "color:red",
                );
            LS.removeItem("_" + operatingFn);
            LS[fn2] = ttl;
            operatingFn = fn2;
            fnInput.attr("value", fn2);
        }
        remFile(fn) {
            var unsafe = false;
            filesSpace.delete("0", fn).catch((err) => {
                unsafe = true;
                return fileOperations.msgBox(
                    "删除失败！(步骤1)",
                    err,
                    "color:red",
                    "color:red",
                );
            });
            if (unsafe) return;
            try {
                delete fileArray[fn];
            } catch (err) {
                unsafe = true;
                return fileOperations.msgBox(
                    "删除失败！(步骤2)",
                    err,
                    "color:red",
                    "color:red",
                );
            }
            if (unsafe) return;
            var a = $S(".file-list>li:not([data-sp])");
            a = a[a.map((e) => e.INTEXT()).indexOf(fn)];
            if (a) a.remove();
            else
                return fileOperations.msgBox(
                    "删除失败！(步骤3)",
                    "你看这文件能被点击吗？它喝隐身药水了你知道吗？？？",
                    "color:red",
                    "color:red",
                );
            aceEditor.selectAll();
            aceEditor.insert(sessionAreaText);
            LS.removeItem("_" + operatingFn);
            operatingFn = 0;
            fnInput.attr("value", "session " + ttl);
        }
        msgBox(
            title = "title",
            content = "content",
            titleStyle = "",
            contentStyle = "",
            autoClick = true,
        ) {
            return $c("div")
                .class("cusMsgBox")
                .append($c("h1").inhtml(title).attr("style", titleStyle))
                .append($c("p").inhtml(content).attr("style", contentStyle))
                .follow(body)
                .THEN((a) =>
                    a.listen("click", (e) => {
                        a.style("animationName", "cusMsgBox_anim2").THEN((e) =>
                            setTimeout((e) => e.remove(), 500, e),
                        );
                    }),
                )
                .THEN(
                    (a) => autoClick && setTimeout((e) => e.click(), 4321, a),
                );
        }
    }
    window.fileOperations = new fileOperationsBaseClass();
    $s(".file-list>li[data-sp]").listen("click", function (e) {
        fileOperations.saveFile();
        LS.removeItem("_" + operatingFn);
        document.title = `${ttl} session`;
        fileOperations.replaceSessionTxt(sessionAreaText);
        operatingFn = 0;
        fnInput.attr("value", "session " + ttl);
    });
    updated.listen("click", function (e) {
        fileOperations.saveFile();
    });
    setInterval(() => {
        fileOperations.saveFile();
    }, 2000);
    $s("#fileCloseBtn").listen("click", function (e) {
        fileWrapper.CLASS("fileOpened");
        editorApp.CLASS("fileOpened");
    });
    $s("#fileBton").listen("click", function (e) {
        fileWrapper.class("fileOpened");
        editorApp.class("fileOpened");
    });
    $s("#fileAddBtn").listen("click", function (e) {
        var a = $c("input")
            .style("position", "absolute")
            .style("top", e.y + "px")
            .style("left", e.x + "px")
            .style("width", "300px")
            .style("height", "23px")
            .style("font-size", "18px")
            .style("z-index", "65537")
            .listen("blur", (e) => a.remove())
            .listen("keydown", (e) => {
                if (e.code == "Enter") {
                    fileOperations.addFile(a.elem.value);
                    a.elem.blur();
                }
            })
            .follow(body)
            .then((e) => e.focus());
    });
    $s("#fileRnmBtn").listen("click", function (e) {
        if (operatingFn == 0)
            return fileOperations.msgBox(
                "重命名失败！",
                "你惹session大小姐干嘛？",
                "color:red",
                "color:red",
            );
        var a = $c("input")
            .style("position", "absolute")
            .style("top", e.y + "px")
            .style("left", e.x + "px")
            .style("width", "300px")
            .style("height", "23px")
            .style("font-size", "18px")
            .style("z-index", "65537")
            .listen("blur", (e) => a.remove())
            .listen("keydown", (e) => {
                if (e.code == "Enter") {
                    fileOperations.rnmFile(operatingFn, a.elem.value);
                    a.elem.blur();
                }
            })
            .follow(body)
            .then((e) => e.focus())
            .attr("value", operatingFn);
    });
    $s("#fileDelBtn").listen("click", function (e) {
        if (operatingFn == 0)
            return fileOperations.msgBox(
                "删除失败！",
                "你惹session大小姐干嘛？",
                "color:red",
                "color:red",
            );
        fileOperations.remFile(operatingFn);
    });
    filesSpace
        .openDB("0", "fn")
        .catch((err) => {
            loading.append(
                $c("h1").style("color", "red").intext(err.toString()),
            );
        })
        .then((db) => {
            filesSpace
                .getAll("0")
                .then((datas) => {
                    console.warn(datas);
                    for (let x of datas) {
                        fileOperations.add(x.fn);
                        fileArray[x.fn] = x.doc;
                    }
                    fnInput.attr("value", "session " + ttl);
                    loadOK();
                })
                .catch((err) => {
                    fileOperations.msgBox(
                        "数据打开失败！",
                        "IndexedDB 出现错误，请修改网页的IndexedDB的权限或打开重试。您现在创建的文件可能丢失！错误内容：" +
                            err,
                        "color:red",
                        "color:red",
                        false,
                    );
                });
            $s("#loadPage>h3[data-db]").remove();
        });
}(false);
