# Vertical Intake

Use this page as a deeper follow-up to the quick reference, not as a full build guide.

Still deciding? Start with the [Intake Quick Reference](../intake-quick-reference.md).

## Start Here

- Pick this style when you want more controlled one-piece handling and a compact front footprint.
- Its biggest strength is deliberate control of larger pieces.
- Its biggest tradeoff is that packaging and upward handoff can get tricky.
- Rough build difficulty: `medium to high`.
- Rough maintenance difficulty: `medium`.

## Why Teams Pick This Intake

GM0 describes vertical intakes as wheels or intake parts rotating on a vertical axis. They are more controllable because they usually pick up one element at a time.

Teams usually pick this style when one-piece control matters more than sweeping up multiple items, or when the robot needs to start moving the piece upward quickly into the next mechanism.

## What a Good Version Looks Like

- The intake captures one piece cleanly instead of letting it twist into a bad angle.
- The guides help the piece enter in the same orientation each time.
- The next stage is close enough that the piece does not hang or fall backward.
- The robot can acquire the piece without needing perfect driver approach.
- The intake still works when the robot is slightly turned relative to the piece.

Good public examples and patterns:

- Vertical intake descriptions and examples in GM0's intake guide
- Relic Recovery style one-piece controlled intakes for larger flat gamepieces
- Roller-conveyor style upward movement such as `7244 OUT of the BOX Robotics` when the piece needs to move higher inside the robot

## Packaging and Upward Transfer

This style often becomes attractive when the intake and transfer are closely tied together.

- If the piece needs to move up soon after pickup, vertical packaging can simplify the path.
- If the path needs several angle changes, the benefits disappear quickly.
- Keep the path as straight and short as the robot layout allows.

## What to Watch Out For

- A controlled one-piece intake can still jam if the entry angle is bad.
- If the piece must climb too far before it is secure, it may fall back out.
- Tight packaging can make maintenance harder than expected.
- Teams sometimes choose this style for control, then accidentally add too much transfer complexity afterward.

## Build Difficulty

Overall build complexity is usually `medium to high`.

- The intake face may be compact, but the packaging work is usually harder.
- It is a better fit when your team already knows where the next mechanism sits.
- It is less forgiving than a simple wide horizontal intake if the full robot layout is still uncertain.

## Maintenance and Reliability

Overall maintenance complexity is usually `medium`.

- Check roller spacing and guide alignment often.
- Leave enough access to reach motors, belts, and shafts.
- Watch for wear where pieces rub against fixed guides during the climb.
- Practice jam-clearing so the drive team can recover quickly.

## Good Starting Point

- Start with a short, controlled path that picks up one piece and hands it directly into the next stage.
- Prototype with the actual gamepiece before locking in the rest of the robot.
- Choose this style when control and compact packaging are more important than sweeping speed.

## Compare It to Other Intake Options

- Compared with a [Horizontal Roller Intake](horizontal-roller-intake.md), this style usually gives more control but less width and forgiveness.
- Compared with a [Tubing or Flexible-Wheel Intake](tubing-or-flexible-wheel-intake.md), it usually trades pickup speed for cleaner one-piece handling.
- For the broader overview, use the [Common Active Intake Styles](../intake-quick-reference.md#common-active-intake-styles) section.

## What Still Needs Confirmation

- Confirm that the current season really rewards one-piece control enough to justify the tighter packaging.
- Confirm that the robot layout can support the upward or inward path without creating a long jam-prone route.

## Learn More

- [GM0 Types of Intake](https://gm0.org/en/latest/docs/common-mechanisms/active-intake/types-of-intakes.html)
- [GM0 Principles of an Intake](https://gm0.org/en/latest/docs/common-mechanisms/active-intake/principles-of-an-intake.html)
- [GM0 Transfer Design Fundamentals](https://gm0.org/en/latest/docs/common-mechanisms/transfers/transfer-design.html)
- [GM0 Types of Transfers](https://gm0.org/en/latest/docs/common-mechanisms/transfers/transfer-types.html)
- [Back to Intake Path and Transfer Considerations](../intake-quick-reference.md#intake-path-and-transfer-considerations)
