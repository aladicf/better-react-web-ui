# Faster motion usually improves perceived performance

Animations do not just decorate the interface. Their timing changes how fast the whole product feels.

An animation around `180ms` often feels dramatically more responsive than the same transition at `400ms`, even when both are smooth.

```css
.select-dropdown {
  transition: transform 180ms cubic-bezier(0.16, 1, 0.3, 1);
}
```

Use this principle as a tie-breaker:

- if two versions feel equally understandable, prefer the faster one
- if a transition feels sluggish, shorten duration before adding more visual tricks
- if the motion makes the product feel less responsive, it is working against you

Fast motion can improve perceived performance. Slow motion can make a fast product feel oddly heavy.