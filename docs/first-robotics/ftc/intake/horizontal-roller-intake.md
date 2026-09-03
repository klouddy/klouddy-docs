# Horizontal Roller Intake

Use this page as a deeper follow-up to the quick reference, not as a full build guide.

Still deciding? Start with the [Intake Quick Reference](../intake-quick-reference.md).

## Start Here

- Pick this style when you want a wide floor pickup and faster collection of smaller loose pieces.
- Its biggest strength is forgiving driver alignment and good cycle speed.
- Its biggest tradeoff is that it needs good guides and transfer control to avoid chaos.
- Rough build difficulty: `medium`.
- Rough maintenance difficulty: `medium`.

## Why Teams Pick This Intake

GM0 describes horizontal intakes as wider intakes rotating on a horizontal axis or plane. They are commonly used for smaller game elements and can control more than one piece at a time.

Teams usually pick this style when the game rewards repeated floor pickup, when pieces are scattered, and when a wider front opening helps drivers cycle faster.

## What a Good Version Looks Like

- The front opening is wide enough to forgive slight driver error.
- Side guides center the piece before it reaches the next stage.
- The roller speed pulls pieces in without launching them out the back.
- The next mechanism sits close enough that pieces do not fall into a dead zone.
- The robot can keep collecting while slightly misaligned or while turning.

Good public examples and patterns:

- Horizontal intake examples discussed in GM0's intake guide
- `6299 ViperBots QuadX` style wide intake approach
- `8375 Vulcan Robotics` funneling example for managing small pieces

## Side Guides and Centering

This style usually lives or dies on guiding. A wide roller alone is not enough.

- Add side walls, angled guides, or funnels so pieces enter the same path each time.
- Keep the guided path short.
- Test pickups that start off-center, sideways, or against a wall.

## What to Watch Out For

- Wide openings can collect pieces quickly, but they can also feed pieces sideways into jams.
- If the next mechanism is too far away, pieces bounce, stall, or double-feed.
- Rollers that are too fast can throw pieces deeper than intended.
- Rollers that are too slow can stall when the robot hits a pile.
- Multi-piece pickup is helpful only if the rest of the robot can actually manage it.

## Build Difficulty

Overall build complexity is usually `medium`.

- The front roller itself can be simple.
- The real work is in side guides, retention, and handoff packaging.
- Complexity rises fast if you add multiple stages to fix a bad initial layout.

## Maintenance and Reliability

Overall maintenance complexity is usually `medium`.

- Inspect roller shafts, bearings, and retention hardware.
- Keep guides rigid enough that impacts do not change the intake path.
- Expect wear where pieces scrub along walls or funnels.
- Make jam-clearing easy for the drive team.

## Good Starting Point

- Start with one powered front roller, basic side guides, and the shortest possible handoff.
- If the game uses smaller floor pieces and repeated cycles, this is often a practical first active intake to prototype.
- Do not add a long internal conveyor until a short direct handoff has clearly failed for packaging reasons.

## Compare It to Other Intake Options

- Compared with a [Compliant or Flap Wheel Intake](compliant-or-flap-wheel-intake.md), this style usually favors width and cycle speed over one-piece control.
- Compared with a [Vertical Intake](vertical-intake.md), it is usually easier to make wide and forgiving, but harder to keep tightly controlled.
- For the full side-by-side summary, use the [Common Active Intake Styles](../intake-quick-reference.md#common-active-intake-styles) section.

## What Still Needs Confirmation

- Confirm that the current season really rewards multi-piece or fast floor pickup enough to justify this style.
- Confirm that your next mechanism can accept pieces from a wide front intake without constant jams.

## Learn More

- [GM0 Active Intake](https://gm0.org/en/latest/docs/common-mechanisms/active-intake/index.html)
- [GM0 Types of Intake](https://gm0.org/en/latest/docs/common-mechanisms/active-intake/types-of-intakes.html)
- [GM0 Principles of an Intake](https://gm0.org/en/latest/docs/common-mechanisms/active-intake/principles-of-an-intake.html)
- [GM0 Types of Transfers](https://gm0.org/en/latest/docs/common-mechanisms/transfers/transfer-types.html)
- [Back to Intake Quick Reference Decision Flow](../intake-quick-reference.md#decision-flow)
