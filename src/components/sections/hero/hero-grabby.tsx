"use client";

import { Button } from "@/components/ui/button";
import DraggableWrapper from "@/components/gesturs/wrappers/dragwrapper";
import {
  BoltIcon,
  Camera,
  Image as ImageIcon,
  MessageSquare,
  Mic,
  MoreHorizontal,
  Send,
  Share2,
  Sparkles,
  ThumbsUp,
  Video,
} from "lucide-react";
import FadeIn from "@/components/gesturs/wrappers/fade-in";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

export default function GrabbyHero() {
  return (
    <section className="w-full h-screen p-5">
      <div className="relative grid h-full w-full place-content-center overflow-hidden rounded-lg border bg-background p-4">
        <FadeIn className="flex flex-col items-center justify-center gap-1 px-5 py-10">
          <h1 className="mt-8  max-w-4xl text-balance bg-gradient-to-br from-slate-900 to-slate-600 dark:bg-gradient-to-br dark:from-slate-500 bg-clip-text py-4 text-center text-2xl font-medium tracking-tight text-transparent sm:text-4xl md:text-4xl lg:text-5xl">
            Grow your LinkedIn in Weeks with just Minutes of work
          </h1>
          <p className="mt-2 translate-y-[-1rem] text-balance text-center  text-sm tracking-tight text-muted-foreground sm:text-lg md:max-w-[60rem]  md:text-xl">
            seamlessly integrate <b> posting, repurposing, and collaboration</b>
            , turning your chaotic workflow into an efficient and streamlined
            process.
          </p>
          <Button>Start Free Trial</Button>
        </FadeIn>
        <DraggableWrapper
          initial={{ top: -70, left: -230, rotate: 10 }}
          animate={{
            top: 30,
            left: -200,
          }}
        >
          <Card className="p-4">
            <h3 className="mb-2 font-semibold">Create Post</h3>
            <form>
              <textarea
                placeholder="What's on your mind?"
                //   value={postContent}
                //   onChange={(e) => setPostContent(e.target.value )}
                className="mb-2"
              />
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <Button size="icon" variant="ghost">
                    <Camera className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost">
                    <ImageIcon className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost">
                    <Video className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost">
                    <Mic className="h-4 w-4" />
                  </Button>
                </div>
                <Button type="submit">Post</Button>
              </div>
            </form>
          </Card>
        </DraggableWrapper>

        <DraggableWrapper
          initial={{ top: -100, right: "25%", rotate: -10 }}
          animate={{
            top: -50,
            right: "25%",
          }}
        >
          <Card className="p-4">
            <h3 className="mb-2 font-semibold">AI Content Generator</h3>
            <form>
              <Input placeholder="Enter prompt for AI" className="mb-2" />
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <Button size="icon" variant="ghost">
                    <BoltIcon className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost">
                    <Sparkles className="h-4 w-4" />
                  </Button>
                </div>
                <Button type="submit">Generate</Button>
              </div>
            </form>
          </Card>
        </DraggableWrapper>

        <DraggableWrapper
          initial={{ bottom: -100, left: -200, rotate: 10 }}
          animate={{
            bottom: 40,
            left: -160,
          }}
        >
          <Card className="p-4">
            <h3 className="mb-2 font-semibold">Messages</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Avatar src="/static/batman.png" />
                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-sm text-muted-foreground">
                    Hey, how&apos;s it going?
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Avatar src="/static/batman.png" />

                <div>
                  <p className="font-medium">Jane Smith</p>
                  <p className="text-sm text-muted-foreground">
                    Did you see the latest post?
                  </p>
                </div>
              </div>
            </div>
            <Input className="mt-2" placeholder="Type a message..." />
            <Button size="sm" className="mt-2">
              <Send className="mr-2 h-4 w-4" /> Send
            </Button>
          </Card>
        </DraggableWrapper>

        <DraggableWrapper
          initial={{ bottom: -100, right: "25%", rotate: -10 }}
          animate={{
            bottom: -80,
            right: "25%",
          }}
        >
          <Card className="p-4">
            <h3 className="mb-2 font-semibold">Trending Posts</h3>
            <div className="space-y-2">
              <div className="border-b pb-2">
                <p className="font-medium">AI generates hyper-realistic art</p>
                <div className="mt-1 flex items-center space-x-2">
                  <Button size="icon" variant="ghost">
                    <ThumbsUp className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost">
                    <MessageSquare className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div>
                <p className="font-medium">
                  New social media platform launches
                </p>
                <div className="mt-1 flex items-center space-x-2">
                  <Button size="icon" variant="ghost">
                    <ThumbsUp className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost">
                    <MessageSquare className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </DraggableWrapper>

        <DraggableWrapper
          initial={{ top: -100, left: "20%" }}
          animate={{
            top: -60,
            left: "20%",
          }}
        >
          <Card className="p-4">
            <h3 className="mb-2 font-semibold">Friend Suggestions</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Avatar src="/static/batman.png" />

                  <p className="font-medium">Alice Smith</p>
                </div>
                <Button size="sm">Add</Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Avatar src="/static/batman.png" />

                  <p className="font-medium">Bob Johnson</p>
                </div>
                <Button size="sm">Add</Button>
              </div>
            </div>
          </Card>
        </DraggableWrapper>

        <DraggableWrapper
          initial={{ top: -100, right: -200, rotate: -10 }}
          animate={{
            top: -30,
            right: -150,
          }}
        >
          <Card className="p-4">
            <h3 className="mb-2 font-semibold">AI-Generated Content Ideas</h3>
            <ul className="list-inside list-disc space-y-1">
              <li>5 ways to boost your productivity</li>
              <li>The future of renewable energy</li>
              <li>How AI is transforming healthcare</li>
              <li>Top travel destinations for 2023</li>
            </ul>
            <Button size="sm" className="mt-2">
              Generate More
            </Button>
          </Card>
        </DraggableWrapper>

        <DraggableWrapper
          initial={{ bottom: -70, left: "20%", rotate: 10 }}
          animate={{
            bottom: -60,
            left: "25%",
          }}
        >
          <Card className="p-4">
            <h3 className="mb-2 font-semibold">Social Media Analytics</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Followers:</span>
                <span className="font-medium">1,234</span>
              </div>
              <div className="flex justify-between">
                <span>Posts:</span>
                <span className="font-medium">56</span>
              </div>
              <div className="flex justify-between">
                <span>Engagement Rate:</span>
                <span className="font-medium">4.7%</span>
              </div>
            </div>
            <Button size="sm" className="mt-2">
              View Full Report
            </Button>
          </Card>
        </DraggableWrapper>

        <DraggableWrapper
          initial={{ bottom: -100, right: -170, rotate: 20 }}
          animate={{
            bottom: -40,
            right: -160,
          }}
        >
          <Card className="p-4">
            <h3 className="mb-2 font-semibold">Content Calendar</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span>Mon: AI trends post</span>
                <Button size="icon" variant="ghost">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <span>Wed: Live Q&A session</span>
                <Button size="icon" variant="ghost">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <span>Fri: Product launch</span>
                <Button size="icon" variant="ghost">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <Button size="sm" className="mt-2">
              Add Event
            </Button>
          </Card>
        </DraggableWrapper>
      </div>
    </section>
  );
}
