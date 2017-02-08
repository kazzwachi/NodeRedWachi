var thisPage = thisPage || {
    credentials_1 : {
        url: "https://stream.watsonplatform.net/text-to-speech/api",
        password: "30XLSEDL3FYQ",
        username: "c94c83d8-5190-4fc3-b11a-3b038b4f22f5"
    }
};
thisPage.doTalk = function(s){
    var url = "https://c94c83d8-5190-4fc3-b11a-3b038b4f22f5:30XLSEDL3FYQ@stream.watsonplatform.net/text-to-speech/api/v1/synthesize?voice=ja-JP_EmiVoice&text=こんばんわ";
    $('#voice').load(url);
};
