function convertSnippet(snippet_text) {
    // {type:"snippet",name:"NAME",caption:"CAPTION",snippet:"VALUE"}
    const snippetManager = ace.require("ace/snippets").snippetManager;

    const snippetText = GetSnippetTextAll();
    const snippetListUnprocessed = snippetManager.parseSnippetFile(snippetText);
    const snippetList = snippetListUnprocessed.map( e => ({
        type: "snippet",
        name: "SNIPPET" + e.name,
        caption: e.name,
        snippet: e.content,
    }) );

    return snippetList;
    
}

const SNIPPET_LIST_ = convertSnippet(window["GetSnippetText"]());
const SNIPPET_LIST_V3 = convertSnippet(window["GetSnippetTextV3"]());
const SNIPPET_LIST_Txt = convertSnippet(window["GetSnippetTextTxt"]());

var GetSnippetListAll = ()=>(window['SNIPPET_LIST_'+VERSION_TO_API[version]]())

$s('#loadPage>h3[data-snfx]').remove();