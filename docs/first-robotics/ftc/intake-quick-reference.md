# Intake Quick Reference

Use this page as a fast comparison tool. It is not a full build guide.

## Start Here

- Most FTC teams should compare `active intake` and `passive intake or claw` first.
- This page uses `passive intake` for systems sometimes informally called `inactive` intakes.
- Pick the intake based on the gamepiece, cycle path, and driver alignment needs, not just what another team used.
- Reliability, jam resistance, and easy transfer into the next mechanism matter as much as pickup speed.

## Active vs Passive Intake Comparison

| **Comparison point** | Active intake | Passive intake or claw |
| --- | --- | --- |
| **How it collects** | Uses powered wheels, rollers, belts, or tubing to pull gamepieces in | Driver places or grabs a piece directly with a claw, gripper, scoop, or simple guide |
| **Best at** | Fast floor pickup, shorter cycles, less exact driver alignment | Precise single-piece control, awkward or large objects, simpler mechanisms |
| **Tradeoffs** | More moving parts, more tuning, more jam risk if packaged badly | Usually slower, needs more alignment, often handles one piece at a time |
| **Build difficulty** | Medium | Low |
| **Driver precision needed** | Low to medium | Medium to high |
| **Good fit for** | Games with repeated floor pickup and fast cycling | Newer teams, low-part-count robots, or games with awkward gamepieces |
| **Notes** | Usually the default starting point when the game rewards quick intake cycles | Often simpler to finish, but can cost cycle speed |

## When an Active Intake Is Usually the Better Fit

- The game rewards fast repeated pickup from the floor.
- Your cycle time matters more than perfect control of one object at a time.
- Your team can package an intake path that moves pieces cleanly into the next mechanism.
- Your drivers need some forgiveness instead of exact claw alignment on every pickup.

Learn more:

- [GM0 Active Intake](https://gm0.org/en/latest/docs/common-mechanisms/active-intake/index.html)
- [GM0 Principles of an Intake](https://gm0.org/en/latest/docs/common-mechanisms/active-intake/principles-of-an-intake.html)

## When a Passive Intake or Claw Is Usually the Better Fit

- The gamepiece is large, awkward, fragile, or easy to control with a direct grab.
- Your robot only needs to pick up one piece at a time with careful placement.
- Your team needs the simplest mechanism it can finish and test early.
- Your overall design benefits more from control and simplicity than from raw cycle speed.

Learn more:

- [Video Comparison](https://www.youtube.com/watch?v=cGdW0NvUMS0)
- [GM0 Passive Intake/Claw](https://gm0.org/en/latest/docs/common-mechanisms/passive-intake-claw.html)
- [GM0 Design Tradeoffs](https://gm0.org/en/latest/docs/common-mechanisms/design-tradeoffs.html)
- [Passive Intake or Claw](intake/passive-intake-or-claw.md)

## Common Active Intake Styles

| Style | Best at | Tradeoffs | Notes |
| --- | --- | --- | --- |
| Compliant or flap wheel intake | Fast pickup with some forgiveness for piece position | Can throw or pinch pieces if spacing and speed are wrong | Common beginner-friendly FTC pattern |
| Horizontal roller intake | Wide floor pickup and simple front intake packaging | Needs good side guides and transfer control | Often pairs well with funnels and short transfers |
| Vertical intake | Controlled lift into the robot and compact front footprint | Can be harder to package and tune cleanly | Useful when the next mechanism sits higher in the robot |
| Tubing or flexible-wheel intake | Gentle contact and adaptable geometry | Material wear and tuning can take time | Useful when soft contact helps retention |
| Intake plus transfer path | Clean handoff into a lift, bucket, or shooter path | More parts and more chances to jam | Often worth it when the robot must move pieces deeper into the robot |

Read more:

- [Compliant or Flap Wheel Intake](intake/compliant-or-flap-wheel-intake.md)
- [Horizontal Roller Intake](intake/horizontal-roller-intake.md)
- [Vertical Intake](intake/vertical-intake.md)
- [Tubing or Flexible-Wheel Intake](intake/tubing-or-flexible-wheel-intake.md)
- [Intake and Transfer Path Patterns](intake/intake-and-transfer-path-patterns.md)

Learn more:

- [GM0 Types of Intake](https://gm0.org/en/latest/docs/common-mechanisms/active-intake/types-of-intakes.html)

## Intake Path and Transfer Considerations

- A good intake is not just the front edge. The full path into the robot must stay consistent.
- Add guides, compression, and side protection so pieces do not bounce out or wedge sideways.
- Keep the transfer distance short unless there is a clear reason to move pieces farther into the robot.
- Make jam-clearing and maintenance easy between matches.
- Test intake behavior while turning, stopping, and driving into walls or field elements.

## Best Practices

- Start with the simplest intake that can complete your expected game cycles.
- Prototype pickup, centering, and transfer before committing to a full robot layout.
- Match wheel, roller, or claw geometry to the actual gamepiece instead of guessing from old robots.
- Leave room to replace worn wheels, belts, tubing, or servo horns quickly.
- Tune intake speed for control and consistency, not just maximum power.
- If your intake works alone but fails when connected to the rest of the robot, fix the transfer path before adding more complexity.

## Decision Flow

Use this as a quick way to narrow the options.

1. Does the game reward repeated floor pickup and short cycle times?
   If yes, start with an `active intake`.
2. Is the gamepiece awkward enough that direct gripping is simpler than pulling it through rollers or wheels?
   If yes, compare a `passive intake or claw` first.
3. Does your robot need to control one piece very carefully before scoring?
   If yes, a `passive intake or claw` may be the better fit.
4. Can your team package a clean path from intake to the next mechanism without constant jams?
   If no, simplify the intake or shorten the transfer path.
5. Is your team new or short on build time?
   If yes, prefer the intake your team can finish early and test often.
6. Can your team explain why a more complex intake helps this season more than a simpler proven one?
   If no, choose the simpler option.

### Quick Rule of Thumb

- Pick an `active intake` when speed, floor pickup, and forgiving alignment matter most.
- Pick a `passive intake or claw` when simplicity, direct control, or awkward gamepieces matter most.
- Avoid complicated intake paths unless they clearly improve your full scoring cycle.

## Example Links

### Core Reading

- [GM0 Active Intake](https://gm0.org/en/latest/docs/common-mechanisms/active-intake/index.html)
- [GM0 Passive Intake/Claw](https://gm0.org/en/latest/docs/common-mechanisms/passive-intake-claw.html)
- [GM0 Principles of an Intake](https://gm0.org/en/latest/docs/common-mechanisms/active-intake/principles-of-an-intake.html)
- [GM0 Types of Intake](https://gm0.org/en/latest/docs/common-mechanisms/active-intake/types-of-intakes.html)
- [GM0 Design Tradeoffs](https://gm0.org/en/latest/docs/common-mechanisms/design-tradeoffs.html)

### Current Season Check

- [FIRST FTC Game and Season Materials](https://www.firstinspires.org/resource-library/ftc/game-and-season-info)
- [FTC Competition Manuals](https://ftc-docs.firstinspires.org/en/latest/manuals/game_manuals/game_manuals.html)

### Build Examples

- [REV DUO FTC Starter Bot](https://www.revrobotics.com/duo/ftc-starter-bot/)
- [goBILDA FTC Starter Bot Resource Guide](https://www.gobilda.com/ftc-starter-bot-resource-guide-2026-2027-season/)

### Hardware Examples

- [REV ION Flap Wheels](https://docs.revrobotics.com/ion-build/motion/wheels/flap)
- [REV ION Compliant Wheels](https://docs.revrobotics.com/ion-build/motion/wheels/compliant)
- [REV DUO Wheels](https://docs.revrobotics.com/duo-build/motion/wheels)

## Confirm Before You Build

- Always confirm the current season rules, legal parts, and size constraints in the official FTC documentation.
- No intake is best for every game. Re-check your choice after you study scoring locations, gamepiece behavior, and your team capacity.
- If your intake choice makes the rest of the robot harder to finish or maintain, it is probably too complex.
