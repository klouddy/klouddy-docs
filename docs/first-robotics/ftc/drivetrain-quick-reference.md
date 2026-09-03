# Drivetrain Quick Reference

Use this page as a fast comparison tool. It is not a full build guide.

## Start Here

- Most FTC teams should compare `4WD or 6WD tank` and `mecanum` first.
- Pick the drivetrain based on the game job, not just what another team used.
- Reliability, maintenance, and driver practice matter as much as top speed.

> **Code Red Team Note**
>
> Code Red usually stays with `mecanum` unless there is a very specific reason not to.
>
> That is partly because mecanum is often a strong FTC option, and partly because team experience matters.
>

## Common FTC Drivetrain Options

| Drivetrain | How it moves | Best at | Tradeoffs | Build difficulty | Driver practice needed | Good fit for | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4WD tank | Forward, backward, turn | Simplicity, traction, sturdy packaging | Less flexible movement than mecanum | Low | Low | Newer teams and simple reliable robots | `2 traction + 2 omni` is a common FTC compromise |
| 6WD tank | Forward, backward, turn | Strong all-around traction, turning, and stability | More parts than 4WD and still cannot strafe | Medium | Low | Teams that want a durable competitive drivetrain without holonomic movement | Common FTC versions use corner omnis or drop center |
| Mecanum | Forward, backward, strafe, turn | Alignment, maneuvering in tight spaces, flexible teleop movement | Lower traction, weaker under defense, more wheel slip | Medium | Medium | Games where easy strafing helps scoring or lining up | Wheels must be installed in the correct `X` pattern |
| X-drive or H-drive | Holonomic movement | Interesting packaging or control options | Less common, harder to package well, easier to overcomplicate | High | High | Teams with strong build experience and a clear reason to use one | Usually not the first choice for a quick reliable robot |
| Tread | Forward, backward, turn | Traction and terrain handling | Heavy, maintenance-heavy, and uncommon in strong FTC builds | High | Medium | Very specific game needs only | Usually a niche choice, not a default recommendation |

## When 4WD or 6WD Tank Is a Good Fit

- You want a drivetrain that is easier to build, repair, and drive.
- Your game strategy values traction, pushing, or a simple dependable base.
- Your team wants to spend more time on scoring mechanisms than on drivetrain tuning.
- `6WD` is often the better tank-style competitive option when the team can handle the extra parts.

Learn more:
- [GM0 Tank Drivetrains](https://gm0.org/en/latest/docs/common-mechanisms/drivetrains/tank.html)
- [REV Channel Drivetrain Build Guide](https://docs.revrobotics.com/duo-build/channel-drivetrain-build-guide)

## When Mecanum Is a Good Fit

- You want to strafe for easier alignment at scoring locations.
- Your drivers will have enough practice time to use holonomic movement well.
- The game rewards precise positioning more than raw traction.
- Your team accepts that mecanum usually gives up some traction and can slip more than tank drive.

Learn more:
- [GM0 Holonomic Drivetrains](https://gm0.org/en/latest/docs/common-mechanisms/drivetrains/holonomic.html)
- [REV Mecanum Drivetrain V2](https://docs.revrobotics.com/duo-build/mecanum-drivetrain-v2)
- [REV Mecanum Wheel Setup and Behavior](https://docs.revrobotics.com/duo-build/ftc-starter-kit-mecanum-drivetrain/mecanum-wheel-setup-and-behavior)

## Niche or Advanced Options

- `X-drive` and `H-drive` can work, but they are less common and easier to package badly.
- `Tread` can look appealing for traction, but it adds maintenance and complexity that many FTC teams do not need.
- If your team cannot explain exactly why a niche drivetrain helps your game strategy, a proven tank or mecanum layout is usually the better choice.

Learn more:
- [GM0 Drivetrains Overview](https://gm0.org/en/latest/docs/common-mechanisms/drivetrains/index.html)
- [GM0 Design Tradeoffs](https://gm0.org/en/latest/docs/common-mechanisms/design-tradeoffs.html)

## Best Practices

- Use a proven FTC drivetrain pattern before trying something exotic.
- Choose gearing that matches your wheel size and game goals instead of accepting a very slow default setup.
- Prefer drivetrains that students can inspect, maintain, and fix between matches.
- Support shafts and power transmission carefully so chains, belts, gears, and wheels stay aligned.
- For mecanum, use quality wheels and verify the wheel orientation before driving.
- Do not let advanced odometry plans delay a reliable drive base.

## Decision Flow

Use this as a quick way to narrow the options.

1. Does the game reward strafing and easy side-to-side alignment?
   If yes, start with `mecanum`.
2. Does your team already have strong mecanum experience?
   If yes, staying with `mecanum` is often the better choice unless the game gives a strong reason not to.
3. Does the game reward traction, pushing, or a very simple reliable base more than strafing?
   If yes, compare `4WD tank` and `6WD tank`.
4. Is your team new or short on build time?
   If yes, prefer the simplest proven drivetrain your team can finish early and practice with.
5. Can your team clearly explain why an `X-drive`, `H-drive`, or `tread` layout helps this season more than tank or mecanum?
   If no, do not choose the niche option.
6. Will this drivetrain leave enough time to build the rest of the robot and practice driving?
   If no, choose the simpler option.

### Quick Rule of Thumb

- Pick `mecanum` when alignment, flexibility, and team experience matter most.
- Pick `4WD or 6WD tank` when traction, simplicity, and durability matter most.
- Avoid advanced or niche drivetrains unless your team has both experience and a clear game-specific reason.

Learn more:
- [GM0 Choosing a Motor](https://gm0.org/en/latest/docs/power-and-electronics/motor-guide/choosing-motor.html)
- [GM0 Direct Drive](https://gm0.org/en/latest/docs/common-mechanisms/power-transmission/direct-drive.html)
- [GM0 Dead Wheels](https://gm0.org/en/latest/docs/common-mechanisms/dead-wheels.html)

## Example Links

### Video Overview

- [Chassis and Drivetrain Basics | FTC Essentials](https://www.youtube.com/watch?v=KUwyqYKgw9I)

### Core Reading

- [GM0 Drivetrains](https://gm0.org/en/latest/docs/common-mechanisms/drivetrains/index.html)
- [GM0 Tank Drivetrains](https://gm0.org/en/latest/docs/common-mechanisms/drivetrains/tank.html)
- [GM0 Holonomic Drivetrains](https://gm0.org/en/latest/docs/common-mechanisms/drivetrains/holonomic.html)

### Build Examples

- [REV Channel Drivetrain Build Guide](https://docs.revrobotics.com/duo-build/channel-drivetrain-build-guide)
- [REV Mecanum Drivetrain V2](https://docs.revrobotics.com/duo-build/mecanum-drivetrain-v2)

### CAD Examples

- [REV Channel Drivetrain CAD](https://cad.onshape.com/documents/0aaa7f336e30d51b49f1c205/w/f2c9af258dc1457cbb379bbb/e/28c891cfaaece9ffbd90cb84)
- [REV Mecanum Drivetrain CAD](https://cad.onshape.com/documents/fe4ddc04acb2fe07e7615d35/w/99b93940e1575fb04acb47d4/e/f34759ef6ea954e463811068)

## What Still Needs Confirmation

- Always confirm the current season rules, legal parts, and robot constraints in the official FTC documentation.
- No drivetrain is best for every game. Re-check your choice after you study scoring paths, field traffic, and your team capacity.
