###ROUTER

# import
import { BrowserRouter, Route } from 'react-router-dom'

#Inclusive Routing
If you need to show multiple components per route in 1 page
<Route path="/" exact component={HomePage} />
<Route path="/users" component={UsersPage} />
<Route path="/users" component={UsersFooter} />

#Exclusive Routing
If you need just one route to match in a group, use <Switch> to enable exclusive routing:
Use <Redirect/> to fallback to default route
<Switch>
  <Route path="/" exact component={HomePage} />
  <Route path="/users/add" component={UserAddPage} />
  <Route path="/users" component={UsersPage} />
  <Redirect to="/" />
</Switch>