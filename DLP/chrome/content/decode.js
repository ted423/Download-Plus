var xThunderDecode = {

    getDecodedNode : function(link) {
        var url;
        var cid;
        var htmlDocument = link.ownerDocument;
        var referrer = htmlDocument.URL;

        // In special
        var matches;


        // In general
        if (!url) {
            while (link && typeof link.href == "undefined" && !xThunderPref.proSupReg.test(link.name)) {
                link = link.parentNode;
            }
            if (!link) {
                url = "";
            } else {
                url =  link.getAttribute("ed2k") ||  link.href || link.name;
            }
        }

        //url = this.getDecodedUrl(url);
        return url;
    },
}