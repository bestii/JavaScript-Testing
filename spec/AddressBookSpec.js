describe("Address Book", function () {
    var addressBook,
        thisContact;
    beforeEach(function () {
        addressBook = new AddressBook();
        thisContact = new Contact();
    });
    it("should be able to add a contact", function () {
        addressBook.addContact(thisContact);

        expect(addressBook.getContact(0)).toBe(thisContact);
    });
    it("should be able to delete a contact", function () {
        addressBook.addContact(thisContact);
        addressBook.deleteContact(0);

        expect(addressBook.getContact(0)).not.toBeDefined();
    });
});

describe("Async Address Book", function () {
    var addressBook = new AddressBook();
    
    //Done is used to indicate that its an async task
    beforeEach(function(done){
        addressBook.getInitialContacts(function(){
            //Tells our tests async task is completed
            done();            
        });
    });

    //The done param here indicates that this test should be run once done() is executed.
    it("should grab initial contacts", function (done) {     
        expect(addressBook.initialComplete).toBe(true);
        done();
    });
});