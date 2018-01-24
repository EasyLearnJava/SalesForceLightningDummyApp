({
    searchKeyChange: function(component, event, helper) {
        var searchInputCmp = component.find("id_inputSearch");
        var searchInputCmpValue = searchInputCmp.get("v.value");
        var updateEvent = component.getEvent("updateSearchKey");
        updateEvent.setParams({ "searchKey": searchInputCmpValue });
        updateEvent.fire();
    }
})
