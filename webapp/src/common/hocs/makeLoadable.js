import React from 'react';
import Loadable from 'react-loadable';
import LoadingComponent from '../components/LoadingComponent';

function makeLoadable(opts, preloadComponents) {
  return Loadable.Map({
    loader: {
      Component: opts.loader,
      NotificationLayout: () => (import('../components/Alert')),
    },
    loading: LoadingComponent,
    render(loaded, props) {
      if (preloadComponents !== undefined && preloadComponents instanceof Array) {
        preloadComponents.map(component => component.preload());
      }

      const Component = loaded.Component.default;
      // const NotificationLayout = loaded.NotificationLayout.default;

      return (
        <div>
          <Component {...props} />
          {/* <NotificationLayout /> */}
        </div>
      );
    },
  });
}

export default makeLoadable;
