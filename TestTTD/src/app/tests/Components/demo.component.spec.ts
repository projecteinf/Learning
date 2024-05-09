import { LightswitchComponent } from "../../Demos/Components/demo.component";

describe('LightswitchComp', () => {
    it('#clicked() should toggle #isOn', () => {
      const comp = new LightswitchComponent();  // isOn = false
      expect(comp.isOn).withContext('off when is created').toBe(false); // isOn és la propietat del component
      comp.clicked();   // Fem clic
      expect(comp.isOn).withContext('Opening the light').toBe(true);
      comp.clicked();
      expect(comp.isOn).withContext('Closing the light').toBe(true);
    });
  
    it('#clicked() should set #message to "is on"', () => {
      const comp = new LightswitchComponent();  // create a new instance of the component(isOn = false)
      expect(comp.message).withContext('off at first').toMatch(/is off/i);
      comp.clicked();
      expect(comp.message).withContext('on after clicked').toMatch(/is on/i);
    }); 
  });