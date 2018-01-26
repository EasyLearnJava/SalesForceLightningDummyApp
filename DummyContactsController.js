({
    doInit : function(component, event, helper) {
        helper.findAllContactsHelper(component);
    },
    
    searchNameKeyChange: function(component, event, helper) {
        var searchKey = event.getParam("searchKey");
        component.set("v.searchKey", searchKey);
        helper.findAllContactsHelper(component);
    },
    
    onPagePrevious: function(component, event, helper) {
        var page = component.get("v.page") || 1;
        page = page - 1;
        helper.findAllContactsHelper(component, page);
    },
    
    onPageNext: function(component, event, helper) {
        var page = component.get("v.page") || 1;
        page = page + 1;
        helper.findAllContactsHelper(component, page);
    }
})
