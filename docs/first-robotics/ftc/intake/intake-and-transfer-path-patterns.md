# Intake and Transfer Path Patterns

Use this page as a deeper follow-up to the quick reference, not as a full build guide.

Still deciding? Start with the [Intake Quick Reference](../intake-quick-reference.md).

## Start Here

- Treat this as a system page, not a separate intake family.
- Pick a deeper transfer path only when the robot layout really needs it.
- Its biggest strength is solving packaging and buffering problems.
- Its biggest tradeoff is added jam risk and added maintenance.
- Rough build difficulty: `medium to high`.
- Rough maintenance difficulty: `medium to high`.

## Why the Transfer Path Matters

GM0 treats transfer design as part of the full mechanism problem: what object is moving, where it must go, and how it gets there. When the intake and scorer line up cleanly, the transfer can stay simple. When they do not, the transfer path becomes a major design job.

This is why `intake plus transfer path` works better as a system pattern than as a pure intake type.

## What a Good Full Path Looks Like

- The piece follows one short, understandable route.
- The path changes direction as little as possible.
- Each stage hands off with overlap instead of leaving a dead space.
- Drivers can clear jams without taking the robot apart.
- The transfer is only as complex as the packaging problem requires.

## Common Patterns

- `Direct transfer`: fastest and simplest when the next mechanism can sit right behind the intake.
- `Flip-up transfer`: useful when the intake must start low or outside the robot, then rotate upward.
- `Conveyor transfer`: useful when pieces must move farther internally or buffer multiple pieces.
- `Hybrid transfer`: useful when a single method does not provide enough grip and continuity.

## Common Jam Points

- Entrance where the piece first leaves the intake
- Gaps between rollers or stages
- Tight corners or direction changes
- Exit into the scoring mechanism
- Overfilled buffers that let pieces collide with each other

## Packaging Tradeoffs

GM0 recommends avoiding unnecessary mechanical complexity. Moving pieces across multiple axes is harder and more error-prone than a straight-line handoff.

- If direct transfer works, start there.
- Add flip-up or conveyor behavior only when your layout really needs it.
- Do not use a long internal path to hide a weak intake front end.

## Build Difficulty

Overall build complexity is usually `medium to high`.

- `Direct transfer` is often the simplest and fastest.
- `Flip-up` adds packaging flexibility but also alignment work.
- `Conveyor` styles offer the most routing freedom, but they also bring the most moving parts.

## Maintenance and Match-to-Match Recovery

Overall maintenance complexity is usually `medium to high`.

- Every extra stage adds another failure point.
- Belts, rollers, tubing, shafts, and guides all need access.
- Build the path so the drive team can clear a jam quickly.
- Test after collisions, because alignment drift often shows up first in transfers.

## Good Starting Point

- Begin with the shortest possible intake-to-scoring path.
- Use a direct handoff if your robot layout allows it.
- Add stages only after you can explain exactly what problem each stage solves.

## When to Keep the Path Short

- When your team is new
- When build time is short
- When the gamepiece already enters near the final scoring mechanism
- When a longer path does not clearly improve cycle time or control

## What Still Needs Confirmation

- Confirm that the current season actually rewards buffering or deeper internal routing.
- Confirm that the extra transfer stages leave enough time for testing, driving practice, and match repairs.

## Learn More

- [GM0 Transfer Design Fundamentals](https://gm0.org/en/latest/docs/common-mechanisms/transfers/transfer-design.html)
- [GM0 Types of Transfers](https://gm0.org/en/latest/docs/common-mechanisms/transfers/transfer-types.html)
- [GM0 Principles of an Intake](https://gm0.org/en/latest/docs/common-mechanisms/active-intake/principles-of-an-intake.html)
- [Back to Intake Path and Transfer Considerations](../intake-quick-reference.md#intake-path-and-transfer-considerations)
