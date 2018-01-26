({
    findAllContactsHelper : function(component, page) {
        alert('page : ' + page);
        var action = component.get("c.findAllContacts");
        action.setStorable();
        var pageSize = component.get("v.pageSize");
        action.setParams({
            "searchKey": component.get("v.searchKey"),
            "pageSize": pageSize,
            "pageNumber": page || 1
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var result = response.getReturnValue();
                console.log('Page %d loaded in %fms', result.page, performance.now() - startTime);
                component.set("v.contactsList", result.contacts);
                component.set("v.page", result.page);
                component.set("v.total", result.total);
                component.set("v.pages", Math.ceil(result.total/pageSize));
            } else if (state === "ERROR"){
                console.log('Page loaded in %fms', performance.now() - startTime);
                console.error("findAllContactsHelper : Error");
                console.error("Error Message: ", response.getError()[0].message);              
            }else{
                console.log('Page loaded in %fms', performance.now() - startTime);
                console.log("findAllContactsHelper : Unhandled return response Status")
            }
        });
        var startTime = performance.now();
        $A.enqueueAction(action);
    }
})
