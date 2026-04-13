# Marketing and storytelling surfaces can be more expressive

Most product UI should bias toward speed and restraint. Marketing pages, launch pages, and one-time storytelling moments are the main exception.

Because those surfaces are visited infrequently, they can tolerate longer or more expressive motion than everyday application flows.

```css
.hero-element {
  animation: float-in 800ms cubic-bezier(0.22, 1, 0.36, 1);
}
```

Rough guideline:

- **app UI** → usually under `300ms`, functional, restrained
- **marketing / hero storytelling** → `500-1000ms` can be appropriate if the motion earns its space
- **onboarding** → can be more playful when it teaches or guides

This is an exception, not a loophole for making ordinary app UI feel slow.