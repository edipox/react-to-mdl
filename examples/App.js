import React from 'react';
import { mdlUpgrade } from 'src';
import Layout, {
  LayoutHeader,
  LayoutIcon,
  LayoutHeaderRow,
  LayoutTitle,
  LayoutSpacer,
  Navigation,
  NavigationLink,
  LayoutDrawer,
  LayoutContent
} from 'src/layout';
import 'material-design-lite/src/layout/_layout.scss';

class App extends React.Component {
  render() {
    return (
      <Layout id="starwars">
        <LayoutHeader>
          <LayoutIcon />
          <LayoutHeaderRow>
            <LayoutTitle>react-to-mdl examples</LayoutTitle>
            <LayoutSpacer />
            <Navigation>
              <NavigationLink to="/">Home</NavigationLink>
            </Navigation>
          </LayoutHeaderRow>
        </LayoutHeader>

        <LayoutDrawer>
          <Navigation>
            <NavigationLink to="/">Home</NavigationLink>
            <NavigationLink to="#cards">Cards</NavigationLink>
            {/* <LogoutLink /> */}
          </Navigation>
        </LayoutDrawer>

        <LayoutContent>
          { this.props.children }
        </LayoutContent>
      </Layout>
    );
  }
}

/** exports **/
export default mdlUpgrade(App);
