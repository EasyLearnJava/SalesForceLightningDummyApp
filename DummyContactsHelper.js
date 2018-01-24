({
    findAllContactsHelper : function(component) {
        var action = component.get("c.findAllContacts");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                console.log(response.getReturnValue());
                component.set("v.contactsList", response.getReturnValue());
            } else if (state === "ERROR"){
                var message = response.getError();
                console.error("findAllContactsHelper : Error");
                console.error(message);                
            }else{
                console.log("findAllContactsHelper : Unhandled return response Status")
            }
        });
        $A.enqueueAction(action);
    },
    SearchAllContactsByNameKeyHelper : function(component, event) {
        var searchKey = event.getParam("searchKey");
        var action = component.get("c.searchByName");
        action.setParams({
            "searchKey": searchKey
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                console.log(response.getReturnValue());
                component.set("v.contactsList", response.getReturnValue());
            } else if (state === "ERROR"){
                var message = response.getError();
                console.error("SearchAllContactsByNameKeyHelper : Error");
                console.error(message);                
            }else{
                console.log("SearchAllContactsByNameKeyHelper : Unhandled return response Status")
            }
        });
        $A.enqueueAction(action);
    }    
})
