//Version Switcher
var version=0;
const VERSIONS=[
    "V1",
    "V3",
    "Txt",
];

const VERSION_TO_API=[
    "",
    "V3",
    "Txt",
];

const VERSION_TO_DEVWIKI_URL=[
    "https://developers.mini1.cn/wiki/",
    "https://dev-wiki.mini1.cn/ugc-wiki/",
    "./nothing.html",
];

var GetSnippetTextTxt=()=>"";
var GetServiceFuncsTxt=()=>[];
var GetGlobalVarsTxt=()=>[];

var GetSnippetTextV3=()=>"";
var GetServiceFuncsV3=()=>[];
var GetGlobalVarsV3=()=>[];

var GetSnippetText=()=>"";
var GetServiceFuncs=()=>[];
var GetGlobalVars=()=>[];

var GetSnippetTextAll=()=>(window['GetSnippetText'+VERSION_TO_API[version]]());
var GetServiceFuncsAll=()=>(window['GetServiceFuncs'+VERSION_TO_API[version]]());
var GetGlobalVarsAll=()=>(window['GetGlobalVars'+VERSION_TO_API[version]]());

var getDevwikiUrlAll=()=>VERSION_TO_DEVWIKI_URL[version];

function unswitchSnippetVer(){
    const snippetManager = ace.require("ace/snippets").snippetManager;
    const file = snippetManager.files[aceEditor.session.$mode.$id];

    const snippetText = GetSnippetTextAll();
    const snippetList = snippetManager.parseSnippetFile(snippetText, file.scope);
    
    file.snippetText = snippetText,
    file.snippet = snippetList;
    snippetManager.unregister(snippetList, file.scope);
}
function switchSnippetVer(){
    $s("#dev-wiki-iframe").attr("src", getDevwikiUrlAll());

    const snippetManager = ace.require("ace/snippets").snippetManager;
    const file = snippetManager.files[aceEditor.session.$mode.$id];

    const snippetText = GetSnippetTextAll();
    const snippetList = snippetManager.parseSnippetFile(snippetText, file.scope);
    
    file.snippetText = snippetText,
    file.snippet = snippetList;
    snippetManager.register(snippetList, file.scope);
}

!function(noRUN) {
    const elem=$s("#versionSwitcher").elem;
    elem.addEventListener("click", e=>{
        unswitchSnippetVer();

        ++version;
        version%=VERSIONS.length;
        elem.innerText=VERSIONS[version];
        
        switchSnippetVer();
    })
    return;
}(false);

$s('#loadPage>h3[data-all]').remove();
// $s("#loadPage>h3[data-app]").remove();