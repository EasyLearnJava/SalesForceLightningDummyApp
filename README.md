# SalesForceLightningDummyApp

### 1-Create-App-And-HeaderComponent
* <b>DummyApp.app</b> extends the styling from SLDS "SalesForce Lightning Design System" and it has a reference to the DummyHeader Component
* <b>DummyHeader.cmp</b> uses the lighting layout and lightning icon tags to display a Header for our application

-----------------------------------------------------------------------------------------------------------------------------

### 2-Fetch-Contact-Records-Print-In-Console
* <b>DummyController.apxc</b> has a method findAllContacts which returns contact details
* <b>DummyApp.app</b> has a new entry for DummyContacts component
* <b>DummyContacts.cmp</b> has a init handler which is invoked when the component is loaded. This calls the findAllContacts method on the DummyController apex class using the functions defined in the <b>DummyContactsController.js</b> and <b>DummyContactsHelper.js</b>

Read more about
[Action States](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/controllers_server_actions_states.htm)

Read more about
[Return Errors from Apex Controllers](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/controllers_server_apex_custom_errors.htm)

Read more about
[Better Exception Handling](https://developer.salesforce.com/blogs/2017/09/error-handling-best-practices-lightning-apex.html)

-----------------------------------------------------------------------------------------------------------------------------

### 3-Display-Contacts-In-UI
* <b>DummyContactsHelper.js</b> file on a successfull request to the apex findAllContacts will update an attribute called contactsList with the return value
* <b>DummyContacts.cmp</b> uses the contactsList attribute populted in the above scenario, and iterates over the list and calls the <b>DummyContactDetails.cmp</b> component to display the contact details

-----------------------------------------------------------------------------------------------------------------------------

### 4-Search-By-Name-And-Register-Event
* <b>DummyContactsSearchBar.cmp</b> file provides a feature to search the contacts by name
* <b>DummyContactsSearchEvent.evt</b> is a component event which is registered in <b>DummyContactsSearchBar.cmp</b> component and invoked when the user inputs value in the search bar
* <b>DummyContactsSearchBarController.js</b> file has searchKeyChange function which fires the event

<b>NOTE :</b> The search functionality will not work, We need to create a handler to handle the event to perform search

-----------------------------------------------------------------------------------------------------------------------------

### 5-Search-EventHandling-And-View-Search-Results
* <b>DummyContacts.cmp</b> has a event handler, which handles the event with the name <b>updateSearchKey</b> triggered from <b>DummyContactsSearchBar.cmp</b> component
* <b>DummyContactscontroller.js</b> invokes the helper method <b>SearchAllContactsByNameKeyHelper</b> which inturn calls the apex controllers <b>searchByName</b> method to find the contacts which match the search criteria 
* <b>DummyController.apxc</b> has a method <b>searchByName</b> to return contacts which match the input parameter

-----------------------------------------------------------------------------------------------------------------------------

