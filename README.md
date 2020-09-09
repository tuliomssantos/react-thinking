#   Componentes Design Workflow

*   [Thinking in React](https://reactjs.org/docs/thinking-in-react.html)
*   [Design Principles](https://reactjs.org/docs/design-principles.html)
---
##  Resume

Start with a mock
1.  Break The UI Into A Component Hierarchy
1.  Build A Static Version in React
1.  Identify The Minimal (but complete) Representation Of UI State
1.  Identify Where Your State Should Live
1.  Add Inverse Data Flow
---
##  Workflow
*   ### **Start with a mock**
Example:

![Mockup](/mockup_thinking-in-react-components.png)

##  Steps
1.  **Break The UI Into A Component Hierarchy**
    *   The components should follow the **Single Responsibility Principle**.
    *   UI and data models tend to adhere to the same information architecture. Separate your UI into components, where each component matches one piece of your data model.
2.  **Build A Static Version in React**
    *   Start the implementation by building a version that takes your data model and renders the UI but has no interactivity.
    *   Building a static version requires a lot of typing and no thinking.
    *   Adding interactivity requires a lot of thinking and not a lot of typing.
3.  **Identify The Minimal (but complete) Representation Of UI State**
    *   **Don't Repeat Yourself**
    *   Figure out the absolute minimal representation of the state your application needs and compute everything else you need on-demand.
    *   **Ask three questions about each piece of data**:
        1.  **Is it passed in from a parent via props?** If so, it probably isn’t state.
        2.  **Does it remain unchanged over time?** If so, it probably isn’t state.
        3.  **Can you compute it based on any other state or props in your component?** If so, it isn’t state.
4.  **Identify Where Your State Should Live**
    
    For each piece of state in your application:
*   Identify every component that renders something based on that state.
*   Find a common owner component (a single component above all the components that need the state in the hierarchy).
*   Either the common owner or another component higher up in the hierarchy should own the state.
*   If you can’t find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common owner component. *Keep the Single Responsibility Principle in Mind.*

5.  **Add Inverse Data Flow**
*   Pass the methods responsible for handling the state through the component tree below as far as the triggers are.