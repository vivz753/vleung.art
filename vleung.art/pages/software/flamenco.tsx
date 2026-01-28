import { NextPage } from "next"
import Link from "next/link"
import Head from "next/head"

const Flamenco: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Open-source development on Flamenco at Blender by Vivian Leung" />
        <link rel="icon" href="/images/rainbows/rainbow-blue-svgrepo-com.svg" />
      </Head>
      <div className="flex h-full min-h-screen w-dvw justify-center pb-24 pt-[72px] my-12">
        <div className="flex w-full max-w-[1024px] flex-col gap-8 px-6 py-8">
          <span className="text-4xl">Open-source development on Flamenco @ Blender</span>
          <div className="flex flex-col gap-2">
            <span className="text-2xl">Role: Designer, Frontend, Backend, Project management</span>
            <span className="text-xl">Tools: Vue.js, Go, Make, OpenAPI, Swagger, Git</span>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Google Summer of Code 2025:</h3>
            <li className="underline hover:text-pink-400">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://devtalk.blender.org/t/gsoc-2025-adding-handy-features-and-ui-improvements-to-flamenco/40723#p-152152-project-proposal-1"
              >
                Project Proposal
              </Link>
            </li>
            <li className="underline hover:text-pink-400">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://devtalk.blender.org/t/gsoc-2025-adding-handy-features-and-ui-improvements-to-flamenco/40723/22"
              >
                Final Submission
              </Link>
            </li>
            <li className="underline hover:text-pink-400">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://devtalk.blender.org/t/gsoc-2025-adding-handy-features-and-ui-improvements-to-flamenco/40723"
              >
                Weekly Updates
              </Link>
            </li>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Abstract</h3>
            <p className="">
              Flamenco is an open-source render farm web application created by the Blender Foundation. The target
              audience of Flamenco is small studios, typically consisting of artistic, non-technical users. To make the
              web application more user friendly, a settings page within the web application has been proposed to help
              users configure the application with ease. Users can manually edit the settings in a
              <code> flamenco-manager.yaml</code>, but with the addition of a settings page which provides input
              validation, presets, and descriptions, erroneous inputs are prevented and users get a better understanding
              of what each setting does. Additionally, features like multi-selection and mass job selection were
              proposed to speed up workflows by allowing users to perform actions on multiple jobs, tasks, and workers
              instead of one by one.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Summary</h3>
            <p>
              The primary goal of this project was to implement various features to make it easier for users to
              configure the Flamenco Manager and speed up workflow with job and task management. The secondary goal was
              to implement UI fixes and enhancements to improve the overall user experience with the web application. I
              contributed a total of 25 pull requests to Flamenco which include bug fixes and the implementation of the
              following features:
            </p>
            <li>Settings page</li>
            <li>Multi-select of jobs, tasks, workers</li>
            <li>Mass-selection of jobs by timestamp</li>
            <p>
              For more about my code contributions, see{" "}
              <Link
                className="underline hover:text-pink-400"
                target="_blank"
                rel="noopener noreferrer"
                href="https://devtalk.blender.org/t/gsoc-2025-adding-handy-features-and-ui-improvements-to-flamenco/40723/22#p-155554-pull-requests-11"
              >
                pull requests
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Design</h3>
            <p>
              For the settings page, I first designed a mockup of a form for users to input preferences in the form of
              text, numbers, and dropdown options. Because Flamenco has over 20 customizable settings, I settled on a
              minimalistic design and divided the amount of settings into five manageable categories: Core Settings,
              Timeout & Failures, Storage, MQTT, and Variables. Both the side dialog and subheader scroll along with the
              user’s screen, making it easy to access essential functions regardless of whether the user is at the top,
              middle, or bottom of the form.
            </p>
            <div className="my-4 flex flex-col items-center lg:my-12 lg:gap-4">
              <div className="h-[250px] w-full bg-[url(/images/software/flamenco/core-settings-mockup.png)] bg-contain bg-center bg-no-repeat lg:h-[560px]"></div>
              <Link
                className="underline hover:text-pink-400"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.figma.com/design/RHefk3EJ6H75668g4mSO13/GSoC-Flamenco-YAML-Config-Editor?node-id=0-1&t=dCLQ05qV5GRlc657-1"
              >
                View the full mockup on Figma
              </Link>
            </div>
            <p>
              The subheader acts as a navigation bar specific to this page, making it easy for users to jump to a
              specific section of the form. The subheader also contains the Save button, so that users can conveniently
              save their changes regardless of what scroll position they are at. Despite the fact that there are a lot
              of settings to tinker with, the sticky elements make it easy for users to jump around the form and find
              additional info without adding to the length of the page, minimizing the amount of time a user spends
              scrolling up and down a page.
            </p>
            <div className="my-8 flex flex-col items-center gap-4 lg:my-12">
              <div className="h-[50px] w-full bg-[url(/images/software/flamenco/subheader.png)] bg-contain bg-center bg-no-repeat lg:h-[50px]"></div>
              <p>Subheader navigation of Settings page</p>
            </div>
            <p>
              The side dialog provides a brief description about the page, along with a description explaining what each
              setting does. The description for each setting gets dynamically rendered based on which input the user is
              currently focused on, minimizing clutter and only showing what’s necessary based on where the user is
              clicking. By keeping the descriptions in the sidebar, text is minimized on the form, keeping it clean and
              making it easy for users to scan through.
            </p>
            <div className="my-8 flex flex-col items-center gap-4 lg:my-12">
              <div className="h-[200px] w-full bg-[url(/images/software/flamenco/side-description-port.png)] bg-contain bg-center bg-no-repeat lg:h-[600px]"></div>
              <p>Side dialog description when the input for port is focused</p>
            </div>
            <p>
              The Variables section was more complicated to design because users needed to be able to dynamically add
              variables, and have multiple configurations for each variable. Several iterations revealed that more
              attributes were required, like the audience. Users should be able to add/delete variables, and also
              add/edit/delete various configurations for each variable.
            </p>
            <div className="my-8 flex flex-col items-center gap-4 lg:my-12">
              <div className="h-[200px] w-full bg-[url(/images/software/flamenco/variables-mockup.png)] bg-contain bg-center bg-no-repeat lg:h-[400px]"></div>
              <p>Mockup of Variables</p>
            </div>
            <div className="my-4 flex flex-col items-center gap-4 lg:my-12">
              <div className="h-[250px] w-full bg-[url(/images/software/flamenco/variables-initial.png)] bg-contain bg-center bg-no-repeat lg:h-[550px]"></div>
              <p>Initial implementation of Variables</p>
            </div>
            <div className="my-4 flex flex-col items-center gap-4 lg:my-12">
              <div className="h-[300px] w-full bg-[url(/images/software/flamenco/variables-final.png)] bg-contain bg-center bg-no-repeat lg:h-[700px]"></div>
              <p>Final implementation of Variables</p>
            </div>
          </div>
          <p>
            Designing multi-selection and mass job selection was straightforward since they function as extensions of
            already existing components. Multi-selection is a common feature across many applications like file
            explorers and IDEs, so I settled on conventional key combinations like <code>Ctrl + Left-click</code> to
            select a range and <code>Shift + Left-click</code> to select/deselect specific rows. With mass job selection
            (initially proposed as mass job deletion), users are given the choice of what action (delete, pause, cancel,
            or requeue) to perform after selecting the jobs. This feature is useful for managing large numbers of jobs,
            particularly when a user wants to clean up batches of old jobs.
          </p>
          <div className="my-4 flex flex-col items-center gap-4 lg:my-12">
            <div className="h-[220px] w-full bg-[url(/images/software/flamenco/mass-job-deletion-mockup.png)] bg-contain bg-center bg-no-repeat lg:h-[560px]"></div>
            <p>Mockup of Mass job deletion</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Process</h3>
            <p>
              For the settings page, I built individual Vue components for each input type equipped with input
              validation and error messages. To make the configuration data export and import properly, I implemented an
              API call for updating the <code>flamenco-manager.yaml</code> file on the disk, along with unit tests to
              ensure that the updated attributes on the form reflected the same attributes that were sent in the request
              body. The description of a setting <code>onFocus</code> is rendered on the side dialog. Additionally, I
              added these definitions to the{" "}
              <Link
                href="https://flamenco.blender.org/usage/manager-configuration/#definitions"
                className="underline hover:text-pink-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                Manager Configuration
              </Link>{" "}
              page of the Flamenco documentation, providing additional reading for those who want a deeper understanding
              of how Flamenco operates.
            </p>
            <div className="my-4 flex flex-col items-center gap-4 lg:my-12">
              <div className="h-[300px] w-full bg-[url(/images/software/flamenco/settings-1-final.png)] bg-contain bg-center bg-no-repeat lg:h-[960px]"></div>
              <p>Final implementation of Settings page (1/3)</p>
            </div>
            <div className="my-4 flex flex-col items-center gap-4 lg:my-12">
              <div className="h-[300px] w-full bg-[url(/images/software/flamenco/settings-2-final.png)] bg-contain bg-center bg-no-repeat lg:h-[960px]"></div>
              <p>Final implementation of Settings page (2/3)</p>
            </div>
            <div className="my-4 flex flex-col items-center gap-4 lg:my-12">
              <div className="h-[300px] w-full bg-[url(/images/software/flamenco/settings-3-final.png)] bg-contain bg-center bg-no-repeat lg:h-[960px]"></div>
              <p>Final implementation of Settings page (3/3)</p>
            </div>
            <p>
              For multi-selection to work on the various tables, I added event listeners to detect key-click combos and
              used the Tabulator API to detect which row was being clicked. For <code>Shift + Left-click</code>, I
              calculate the range of rows to select based on the position of the clicked row and the active row; if
              there is no active row, the clicked row is the only one selected. <code>Ctrl + Left-click</code> will
              select or deselect a row based on its selected state. The <code>Cmd</code> key is also supported. Building
              on top of multi-selection, mass job selection was implemented by using the Tabulator API to search and
              select all jobs whose updated timestamp precedes the most recent updated timestamp.
            </p>
            <div className="my-4 flex flex-col items-center gap-4 lg:my-12">
              <div className="h-[300px] w-full bg-[url(/images/software/flamenco/mass-job-selection-final.png)] bg-contain bg-center bg-no-repeat lg:h-[560px]"></div>
              <p>Final implementation of Mass job selection</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Results</h3>
            <span>
              Flamenco now has a working settings page, multi-selection, and mass job selection features. I submitted a
              total of 25 pull requests which have been merged into main. 3 issues were resolved by my pull requests,
              and I opened 3 issues of my own which will be left for future implementation, mainly because they are out
              of the scope of this project.
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Mentorship</h3>
            <span>
              Under the Google Summer of Code 2025 program, I received mentorship from Sybren Stüvel at the Blender
              Foundation. Despite the 12 hour time difference (I was in California, USA and Sybren was in Amsterdam,
              Netherlands), we had weekly meetings to discuss updates, timeline, and any blockers. I worked in 1-2 week
              sprints, submitted pull requests, made changes accordingly after reviews, and repeated this until the code
              was finally merged into main.
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Takeaways</h3>
            <span>
              Initially, I was hesitant to step outside of the javascript ecosystem. Writing API calls and unit tests in
              Go was daunting at first but opened my eyes to better ways of maintaining and architecting code. While
              gaining experience in new tools and a new language, I learned how to run tests using make in the CLI and
              in VSCode, how to use cURL and Postman to test API endpoints, and how to utilize Swagger documentation and
              OpenAPI to conveniently auto generate API code and documentation. I studied developer docs to better
              understand various go packages, including how to marshal/unmarshal with encoding/json, how to handle HTTP
              requests and responses with echo, and how to format durations with time. I also developed proficiency with
              error handling and learned about the data types Go has to offer. Overall, I gained valuable knowledge in
              the realm of Go, testing, and API’s.
            </span>
          </div>
          <p className="text-xl">
            Huge thanks to the GSoC admin and Blender folks for organizing this program, and to my amazing mentor{" "}
            <Link
              className="underline hover:text-pink-400"
              target="_blank"
              rel="noopener noreferrer"
              href="https://devtalk.blender.org/u/sybren/summary"
            >
              @sybren
            </Link>{" "}
            for his patience and guidance!
          </p>
        </div>
      </div>
    </>
  )
}

export default Flamenco
