import { observable, action, runInAction, computed } from "mobx";
import { AsyncStorage } from "react-native";


class ToolsStore {
  // will be an API call
  toolsMap = observable.map({}, { deep: false });

  @action
  createTool = (tool) => {
    try {
      this.toolsMap.set(Math.floor((Math.random() * 100) + 1), tool);
    } catch (error) {
        console.log('error saving tool',error);
    }
  }

  @computed
  get toolsArray() {
    return [...this.toolsMap.values()];
  }

  // create tool here by taking tool object and posting to backend
  // fetch tools here using backend fetch route
 }

const toolsStore = new ToolsStore();

export default toolsStore;
