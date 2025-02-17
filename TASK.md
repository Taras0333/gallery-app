# Frontend Developer Task

## Scenario

You are part of our team, working on a large and complex SPA. The application serves as a CRM for managing artworks.

Your task is to create a **new List View** for artworks based on the provided design and emulate retrieving data from an API.

---

## Task Requirements

1. **Create a New Artworks List View**:

   - Build a list view that aligns with the provided Figma design.
   - Emulate API data retrieval using the `api_data.json` file.

2. **Display Data from API**:

   - Show key details for each artwork, such as:
     - **Notifications Indicator**: Display a blue dot if `has_notifications` is `true`.
     - **Status**: Handle the possible statuses:
       - `draft`
       - `on_sale`
       - `on_digitalization`
       - `ready_for_verification`
       - `published`
     - For simplicity, focus on the data in `api_data.json`.
   - Use the `main_photo.transformations` field to manage image display for responsiveness.

3. **Prerequisites**:

   - Utilize the provided resources:
     - [Figma Design](https://www.figma.com/design/fK46RrqEhT8etCrYu7z8K1/Task?node-id=1-2816&t=PixQAM3FvQ3FFAp8-1)
     - The `assets/` folder for images.
     - The `api_data.json` file containing the API response.
     - The `ref.mov` video as a reference for the final result.
     - The `fonts/` folder for fonts.

4. **Ensure Code Quality**:
   - Write clean, maintainable, and well-structured code.
   - Follow best practices for React, _Svelte_, or another framework of your choice.

---

## Bonus Points

- Add functionality to sort the artworks in the list by at least one sorting criterion.
- Implement responsive markup.
- Use Svelte/SvelteKit.

---

## Deliverables

- A fully functional List View component.
- A README file explaining:
  - How to run your solution locally.
  - Any assumptions or trade-offs you made.

---

## Notes

- Focus on creating a user-friendly interface.
- Pay attention to details such as spacing, alignment, and responsiveness.
- Use mock data for the API but ensure the implementation can easily switch to a real API.

---

Good luck!
