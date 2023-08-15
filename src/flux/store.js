import { EventEmitter } from "events";
import Dispatcher from "./dispatcher";
import Constants from "./constants";
import getSidebarNavItems from "../data/sidebar-nav-items";
import getOmdeSidebarNavItems from "../data/sidebar-nav-items-omde";
import getOmdeWhatifSidebarNavItems from "../data/sidebar-nav-items-omde-whatif";
import getSahamSidebarNavItems from "../data/sidebar-nav-items-saham";
import getSahamWhatifSidebarNavItems from "../data/sidebar-nav-items-saham-whatif";
import getZanjireWhatifSidebarNavItems from "../data/sidebar-nav-items-zanjire-whatif";

let _store = {
  menuVisible: false,
  navItems: getSidebarNavItems(),
  navOmdeItems:getOmdeSidebarNavItems(),
  navOmdeWhatifItems:getOmdeWhatifSidebarNavItems(),
  navSahamItems:getSahamSidebarNavItems(),
  navSahamWhatifItems:getSahamWhatifSidebarNavItems(),
  navZanjireWhatifItems:getZanjireWhatifSidebarNavItems()
};

class Store extends EventEmitter {
  constructor() {
    super();

    this.registerToActions = this.registerToActions.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);

    Dispatcher.register(this.registerToActions.bind(this));
  }

  registerToActions({ actionType, payload }) {
    switch (actionType) {
      case Constants.TOGGLE_SIDEBAR:
        this.toggleSidebar();
        break;
      default:
    }
  }

  toggleSidebar() {
    _store.menuVisible = !_store.menuVisible;
    this.emit(Constants.CHANGE);
  }

  getMenuState() {
    return _store.menuVisible;
  }

  getSidebarItems() {
    return _store.navItems;
  }

  getSidebarSahamItems() {
    return _store.navSahamItems;
  }

  getSidebarSahamWhatifItems() {
    return _store.navSahamWhatifItems;
  }

  getSidebarZanjireWhatifItems() {
    return _store.navZanjireWhatifItems;
  }

  getSidebarOmdeItems() {
    return _store.navOmdeItems;
  }
  
  getSidebarOmdeWhatifItems() {
    return _store.navOmdeWhatifItems;
  }

  addChangeListener(callback) {
    this.on(Constants.CHANGE, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(Constants.CHANGE, callback);
  }
}

export default new Store();
