// jest.setup.ts
global.IntersectionObserver = class IntersectionObserver {
    constructor(public callback: (entries: any[], observer: IntersectionObserver) => void) {
      // Store references to the observed elements
      this.elements = new Set();
    }
  
    // Method to start observing an element
    observe(target: Element): void {
      this.elements.add(target);
      // Mock implementation for when an element is observed
    }
  
    // Method to stop observing an element
    unobserve(target: Element): void {
      this.elements.delete(target);
      // Mock implementation for when an element is unobserved
    }
  
    // Method to disconnect the observer (stop observing all elements)
    disconnect(): void {
      this.elements.clear();
      // Mock implementation for when the observer is disconnected
    }
  
    // Add any additional methods or properties needed for your tests
  
    private elements: Set<Element>;
  } as any;
  