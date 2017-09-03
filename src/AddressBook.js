function AddressBook() {
    var self = this;
    self.contacts = [];
    self.addContact = function (contact) {
        self.contacts.push(contact);
    };

    self.getContact = function(index){
        return self.contacts[index];
    };
    self.deleteContact = function(index){
        self.contacts.splice(index,1);
    };  
}
