# React Router

- allows the user to refresh the page without starting back at the beginning

## Basics

- 2 types of Routers
  - Hash Router
    - use URL hash
    - no limitations on supported browsers
    - does not make a request ot the server
    - uses a '/#/' to separate client side from server requests
  - Browser Router
    - uses history API
    - unavailable in legacy browsers
    - clean looking route in the URL bar
    - may mess up server requests if the server is not set up properly
- Routes - contains all the Route components
- Route - specifies which path will match with which components
  - <Route path="/path" element={<Component />} />
- useParams() - retrieves the variables from the URL path
  - returns an object
- Link - anchor tag that changes the URL bar to the specified route
  - <Link to="/path">Text</Link>