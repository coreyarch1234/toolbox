import { observable, action, computed } from "mobx";
import { AsyncStorage } from "react-native";


class ToolsStore {
  // will be an API call
  toolsMap = observable.map({}, { deep: false });

  @action
  createTool = async (tool) => {
    try {
      const randId = Math.floor((Math.random() * 100) + 1);
      tool.id = randId;
      this.toolsMap.set(randId, tool);

      return this.getToolById(randId);
    } catch (error) {
        console.log('error saving tool',error);
    }
  }

  @computed
  get toolsArray() {
    return [...this.toolsMap.values()] || [];
  }

  getToolById(toolId) {
    return this.toolsMap.get(toolId);
  }

  // create tool here by taking tool object and posting to backend
  // fetch tools here using backend fetch route
}

const toolsStore = new ToolsStore();

export default toolsStore;
