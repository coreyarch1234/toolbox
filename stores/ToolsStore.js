import { observable, action, computed } from "mobx";
import { AsyncStorage } from "react-native";
import { createTool } from "../services/transportLayer";

class ToolsStore {
  // will be an API call
  toolsMap = observable.map({}, { deep: false });

  @action
  createTool = async (tool) => {
    try {
      const createdTool = await createTool();

      this.toolsMap.set(createdTool.id, createdTool);

      return this.getToolById(createdTool.id);
      
    } catch (error) {
        console.log('error saving tool',error);
    }
  }

  @computed
  get toolsArray() {
    return [...this.toolsMap.values()] || [];
  }

  getToolById = toolId => {
    return this.toolsMap.get(toolId);
  }

  // create tool here by taking tool object and posting to backend
  // fetch tools here using backend fetch route
}

const toolsStore = new ToolsStore();

export default toolsStore;
