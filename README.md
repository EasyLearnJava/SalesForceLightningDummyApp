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
[Action States](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/controllers_server_actions_states.htm)[target=_blank]
<a href="https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/controllers_server_actions_states.htm" target="_blank">Hello, world!</a>

Read more about
[Better Exception Handling](https://developer.salesforce.com/blogs/2017/09/error-handling-best-practices-lightning-apex.html)

-----------------------------------------------------------------------------------------------------------------------------
