({
    doInit : function(component, event, helper) {
        helper.findAllContactsHelper(component);
    },
    searchNameKeyChange: function(component, event, helper) {
        helper.SearchAllContactsByNameKeyHelper(component, event);
    }
})
