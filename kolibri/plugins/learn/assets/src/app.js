import KolibriApp from 'kolibri_app';
import RootVue from './views';
import initialState from './state/initialState';
import mutations from './state/mutations';
import prepareLearnApp from './state/prepareLearnApp';
import routes from './routes';

class LearnModule extends KolibriApp {
  get stateSetters() {
    return [prepareLearnApp];
  }
  get routes() {
    return routes;
  }
  get RootVue() {
    return RootVue;
  }
  get initialState() {
    return initialState;
  }
  get mutations() {
    return mutations;
  }
}

export default new LearnModule();
