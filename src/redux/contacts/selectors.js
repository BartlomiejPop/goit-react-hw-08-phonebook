export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectAllContacts = state => state.contacts.names;

export const selectFilteredContacts = state => state.contacts.filter;
