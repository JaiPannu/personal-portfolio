// Public portfolio article. Examples describe general robotics concepts;
// they do not document the contract project's implementation.
const roverPost = {
  slug: 'my-first-robotics-project',
  title: 'Rover - My First Engineering Commission',
  hero: 'rover',
  date: 'August 2026',
  dateTime: '2026-08',
  author: 'Jai Pannu',
  excerpt: 'Notes on motor control, hardware, and autonomous navigation from my first robotics commission.',
  content: [
    {
      type: 'paragraph',
      text: 'My first engineering commission was a robotics integration project for Tracer Golf. I worked on bringing autonomy to an existing mobile platform, using ROS alongside sensors, embedded control, and operator software. I came into it with more experience writing robotics software than working on a physical robot.',
    },
    {
      type: 'paragraph',
      text: 'I understood what a navigation stack was supposed to do. I was less comfortable following a velocity command all the way down to the motors, or working backwards from a wheel measurement to the position shown on a map. That became the part I wanted to understand properly.',
    },
    {
      type: 'paragraph',
      text: 'The contract work is covered by an NDA. I can discuss my role and the broad technology involved; the technical examples here describe general robotics concepts rather than Tracer’s design. The model above shows the stock platform.',
    },
    { type: 'heading', id: 'knowing-where-you-are', text: 'Knowing where you are' },
    {
      type: 'paragraph',
      text: 'To drive to the other side of a room, a robot needs an estimate of where it is and which way it is facing. On a flat floor, we usually describe that pose with x, y, and θ. The software has to estimate all three from measurements that contain some error.',
    },
    {
      type: 'paragraph',
      text: 'Wheel encoders can tell you how far the wheels have turned. Turning that into distance travelled assumes the wheels are rolling as expected. If a wheel slips, the encoder still reports rotation. Integrating those measurements gives you odometry, and its error can accumulate even when every reading looks reasonable on its own.',
    },
    {
      type: 'paragraph',
      text: 'Observing the surroundings gives the robot another source of information. A laser scanner measures distances to nearby surfaces. With an existing map, a localization system can compare those measurements with the geometry it expects to see. SLAM addresses the related problem of estimating motion while building the map. Having a map and finding your position in it are separate tasks.',
    },
    {
      type: 'paragraph',
      text: 'A long, featureless wall is a useful example. A scan can give a good estimate of the distance to the wall, while saying very little about position along it. Moving parallel to the wall may barely change what the sensor sees. A visible corner provides more information because motion changes the measured geometry in both directions. The room itself affects how well the robot can estimate its pose.',
    },
    { type: 'heading', id: 'agreeing-on-coordinates', text: 'Agreeing on coordinates' },
    {
      type: 'paragraph',
      text: 'A point one metre in front of a sensor is not necessarily one metre in front of the robot’s centre. The sensor might be mounted forward of the centre, or rotated relative to it. Before that point can be used elsewhere, its coordinates have to be transformed into the frame the receiving component expects.',
    },
    {
      type: 'paragraph',
      text: 'ROS has standard conventions for these relationships. The robot body has a frame called base_link. Odometry describes continuous local motion, although it can drift. The map frame provides a longer-term reference, but the estimated pose in that frame can jump when localization corrects it. Keeping map and odom separate lets the system represent both kinds of information.',
      source: { label: 'ROS coordinate frame conventions', href: 'https://github.com/ros-infrastructure/rep/blob/master/rep-0105.rst' },
    },
    {
      type: 'frames',
      items: [
        { name: 'map', description: 'Global reference' },
        { name: 'odom', description: 'Continuous local motion' },
        { name: 'base_link', description: 'Robot body' },
        { name: 'sensor', description: 'Sensor mounting' },
      ],
      caption: 'A conventional ROS frame chain, with an illustrative sensor frame. Each link describes a spatial relationship, not a separate processing stage.',
    },
    {
      type: 'paragraph',
      text: 'Time matters here too. A measurement taken during a turn belongs with the robot’s pose at the time of the measurement. Applying the latest transform to an older scan can put an obstacle in the wrong place. This is why I find it useful to think of a measurement as a value, a frame, and a timestamp together.',
    },
    { type: 'heading', id: 'a-path-is-not-a-command', text: 'From a path to a command' },
    {
      type: 'paragraph',
      text: 'Once there is a map, a pose estimate, and a destination, the planner can look for a path. That path has to account for the space occupied by the robot. A line that passes beside an obstacle may be clear for a point and impossible for a machine with width. Costmaps represent obstacles and surrounding costs so navigation can account for clearance as well as distance.',
      source: { label: 'Nav2’s environmental representation', href: 'https://docs.nav2.org/jazzy/getting_started/navigation_concepts/environmental_representation/' },
    },
    {
      type: 'paragraph',
      text: 'The controller has a different job: use the path and the current state to decide how to move now. It repeatedly produces commands as the robot moves and new measurements arrive. Nav2 exposes planning and control as separate responsibilities, which is a useful distinction when trying to understand a navigation problem.',
      source: { label: 'Nav2’s navigation servers', href: 'https://docs.nav2.org/jazzy/getting_started/navigation_concepts/navigation_servers/' },
    },
    {
      type: 'paragraph',
      text: 'For an ideal differential-drive robot, a forward speed v and turn rate ω give wheel speeds v + Lω/2 on the right and v − Lω/2 on the left, where L is the distance between the wheels. Equal speeds produce straight motion. A difference between them produces a turn. On a skid-steer chassis with several wheels on each side, this is only an approximation: turning also involves sideways slip at the tyres.',
    },
    {
      type: 'paragraph',
      text: 'That gives the low-level controller a speed to aim for. Whether the robot follows it depends on the drive system and the surface under the wheels. A turn that works on a smooth floor can require more torque on a surface that resists sideways slip. A path alone tells you very little about that part of the motion.',
    },
    { type: 'heading', id: 'controlling-wheel-speed', text: 'Controlling wheel speed' },
    {
      type: 'paragraph',
      text: 'A motor driver accepts an electrical command, often a PWM duty cycle. It doesn’t directly accept a promise to turn at a particular speed. The same duty cycle can produce different speeds as the load or supply voltage changes. To regulate speed, a controller needs feedback from the motor or wheel.',
    },
    {
      type: 'paragraph',
      text: 'With an encoder, speed can be estimated by counting pulses over a measured interval. The conversion depends on the encoder resolution, the counting mode, and any gearing between the encoder and the wheel. At low speeds, a short interval may contain very few counts, making the estimate jump between values. A longer interval smooths the estimate but delays it. Filtering introduces a similar tradeoff.',
    },
    {
      type: 'paragraph',
      text: 'A PI speed controller uses the difference between requested and measured speed. The proportional term reacts to the current error; the integral term accumulates error over time and can remove a persistent offset under a steady load. Increasing either gain too far can produce oscillation. A derivative term, when used, reacts to how quickly the signal changes, so a noisy encoder estimate needs care. These are choices to make from the measured response, not a requirement to use all three PID terms.',
      source: { label: 'A worked DC motor control example', href: 'https://ctms.engin.umich.edu/CTMS/index.php?aux=Activities_DCmotorB' },
    },
    {
      type: 'paragraph',
      text: 'The driver also has limits. Once it is at maximum output, a larger command cannot produce more voltage. If the integral term keeps accumulating during that period, the motor can overshoot after the load drops or the target changes. Anti-windup limits or corrects that accumulation. Ramping a speed request can also keep a sudden change in target from demanding an acceleration the drivetrain cannot deliver.',
      source: { label: 'Integrator windup and actuator limits', href: 'https://ctms.engin.umich.edu/CTMS/index.php?aux=Activities_DCmotorB' },
    },
    {
      type: 'paragraph',
      text: 'For tuning, I’d start by plotting requested speed, measured speed, and controller output together. A slow response with output already at its limit calls for a different investigation from a response that oscillates around the target. I’d compare both sides of the drivetrain under load as well. Wheels turning freely in the air don’t tell you how the robot will accelerate on the floor.',
    },
    {
      type: 'paragraph',
      text: 'There is a limit to what this feedback can correct. A slipping wheel may track its requested rotational speed very well while the robot travels less distance than expected. The speed controller sees success because it measures wheel rotation. Estimating motion over the ground needs another source of information, which brings the problem back to localization.',
    },
    { type: 'heading', id: 'hardware-under-load', text: 'Hardware under load' },
    {
      type: 'paragraph',
      text: 'The controls make more sense once the hardware is part of the picture. Motor torque has to pass through the gearbox, shafts, and wheels before it moves the chassis. Backlash can delay the response when direction changes. Static friction can keep a wheel still at a small command, then let it move abruptly once the applied torque is large enough. Both can look like a tuning problem if all you inspect is the final position.',
    },
    {
      type: 'paragraph',
      text: 'Power is another constraint. Motors can draw much more current during acceleration or when stalled than while running freely. Driver selection therefore depends on current and thermal limits as well as voltage. A supply that runs the computer comfortably may still dip when the motors demand current. In a general hardware review, I’d check the supply, regulators, connectors, and wiring under representative load before trying to fix intermittent resets in software.',
    },
    {
      type: 'paragraph',
      text: 'Sensor mounting affects the measurements too. A transform assumes the sensor stays at a known position and angle relative to the chassis. A bracket that flexes or vibrates breaks that assumption. Occlusion matters just as much: a sensor may be working correctly while part of the robot blocks its view. Mounting position, stiffness, and field of view belong in the same discussion as the sensor’s specifications.',
    },
    {
      type: 'paragraph',
      text: 'I’d also check where the cables go through the full range of motion. A connector that is easy to reach on the bench may be trapped after assembly; a cable that looks clear while stationary may rub against a wheel or pull on a sensor mount. Strain relief and access for repairs are small mechanical decisions with consequences for how long the electronics keep working.',
    },
    { type: 'heading', id: 'between-computers', text: 'Between the computer and the hardware' },
    {
      type: 'paragraph',
      text: 'Mobile robots often split work between a computer and a microcontroller. The computer can run localization, planning, and a user interface. The microcontroller can handle hardware I/O and work that needs more predictable timing. Once work is divided this way, the connection between them becomes part of the control problem.',
    },
    {
      type: 'paragraph',
      text: 'Suppose a controller sends a request to move forward, then stops sending updates. Receiving the original request correctly doesn’t tell the hardware how long it should remain valid. A system needs an explicit answer to that question. The same applies in the other direction: a sensor value can be plausible and still be too old to use.',
    },
    {
      type: 'paragraph',
      text: 'I now pay more attention to the units and timing at these interfaces. A wheel rate in revolutions per minute needs a conversion before it can be compared with radians per second. A control update also needs a known interval if it is accumulating error over time. Before adjusting gains, I’d check that the controller is receiving the values and update timing it was written for.',
    },
    { type: 'heading', id: 'operating-the-robot', text: 'Operating the robot' },
    {
      type: 'paragraph',
      text: 'Someone using the robot needs to know more than whether the computer is connected. It might be reachable over the network while localization is still starting or a sensor is unavailable. An interface that reports only “connected” leaves the operator to work out whether it can accept a task.',
    },
    {
      type: 'paragraph',
      text: 'For a generic navigation task, I would want to know whether the robot has a usable pose estimate, whether it has accepted the destination, and whether it is moving, waiting, or unable to continue. If it needs help, the interface should explain what the operator can do. That information is useful even if the person never sees a ROS topic or a terminal.',
    },
    {
      type: 'paragraph',
      text: 'It also changes what counts as a useful test. Reaching a destination once doesn’t tell you what happens after a sensor stops updating or a component restarts. Those conditions need to be considered deliberately. A system can produce the expected motion under good conditions and still give its operator very little help when those conditions change.',
    },
    { type: 'heading', id: 'what-id-learn-first', text: 'What I’d learn first now' },
    {
      type: 'paragraph',
      text: 'If I were starting again, I’d spend more time on a small robot with as little autonomy as possible. Drive it manually, compare wheel motion with odometry, and check where sensor measurements land as it turns. Then build a map and try localizing against it. Planning becomes easier to reason about once the information going into it makes sense.',
    },
    {
      type: 'paragraph',
      text: 'I’d also use simulation to change one condition at a time: start with an incorrect pose, delay a measurement, or put an obstacle in an expected route. The useful result is being able to explain which assumption stopped holding and how that affected the rest of the system.',
    },
    {
      type: 'paragraph',
      text: 'On the next robot, I’d start with those measurements before spending much time on autonomous behaviour. I want to know how well it tracks a speed request, how its odometry changes under load, and whether a sensor stays where the software assumes it is. Those checks would give me something concrete to work from when navigation starts behaving unexpectedly.',
    },
  ],
};

export default roverPost;
