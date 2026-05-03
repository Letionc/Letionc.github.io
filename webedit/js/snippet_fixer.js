function convertSnippet(snippet_text) {
    // {type:"snippet",name:"NAME",caption:"CAPTION",snippet:"VALUE"}
    var snippetManager = ace.require("ace/snippets").snippetManager;

    var snippetText = GetSnippetTextAll();
    var snippetListUnprocessed = snippetManager.parseSnippetFile(snippetText);
    var snippetList = snippetListUnprocessed.map( e => ({
        type: "snippet",
        meta: "snippet",
        name: "SNIPPET" + e.name,
        caption: e.name,
        snippet: e.content,
    }) );

    return snippetList;
    
}

var GetSnippetListAll = ()=>(convertSnippet(window["GetSnippetText"+VERSION_TO_API[version]]()));

$s('#loadPage>h3[data-snfx]').remove();