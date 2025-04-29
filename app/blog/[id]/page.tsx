"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock } from "lucide-react"

// Sample blog data - in a real app, this would come from a database or CMS
const blogPosts = {
  "blog-1": {
    title: "Creating Playful UI Animations",
    excerpt: "Learn how to add whimsical animations to your UI that delight users without sacrificing performance.",
    content: `
      # Creating Playful UI Animations

      Animations can transform a static interface into a delightful, engaging experience. When used thoughtfully, they guide users, provide feedback, and add personality to your application. In this post, we'll explore how to create playful animations that enhance your UI without compromising performance or accessibility.

      ## Why Animation Matters

      Animation serves several important purposes in UI design:

      1. **Providing feedback**: Animations can confirm actions, show progress, and indicate state changes.
      2. **Guiding attention**: They can direct users' focus to important elements or changes.
      3. **Adding personality**: Thoughtful animations can express your brand's character and create emotional connections.
      4. **Improving perceived performance**: Well-designed animations can make waiting times feel shorter.

      ## Principles for Playful Animations

      ### 1. Subtlety is Key

      The most effective UI animations are often subtle. They should enhance the experience without drawing attention to themselves. Avoid animations that are too flashy or distracting, especially for common interactions.

      ### 2. Purpose Over Decoration

      Every animation should serve a purpose. Before adding an animation, ask yourself: "Does this help the user understand what's happening?" If the answer is no, reconsider whether it's necessary.

      ### 3. Timing and Easing

      The timing and easing of your animations significantly impact how they feel:

      - **Duration**: Keep most UI animations between 200-500ms. Anything longer can feel sluggish.
      - **Easing**: Use easing functions to make movements feel natural. Linear animations often feel mechanical and unnatural.

      ### 4. Consider Performance

      Animations should never cause performance issues. Some tips for performant animations:

      - Stick to animating only transform and opacity properties when possible
      - Use requestAnimationFrame for JavaScript animations
      - Test on lower-end devices
      - Provide a reduced-motion option for users who prefer fewer animations

      ## Implementation Examples

      ### Button Hover Effect

      \`\`\`css
      .button {
        padding: 10px 20px;
        background-color: #ffd6e0;
        border-radius: 20px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      .button:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
      \`\`\`

      ### Page Transitions with Framer Motion

      \`\`\`jsx
      import { motion } from 'framer-motion';

      const pageVariants = {
        initial: {
          opacity: 0,
          y: 20
        },
        in: {
          opacity: 1,
          y: 0
        },
        exit: {
          opacity: 0,
          y: -20
        }
      };

      const pageTransition = {
        type: 'tween',
        ease: 'anticipate',
        duration: 0.5
      };

      function Page() {
        return (
          <motion.div
            initial="initial"
            animate="in"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
          >
            <h1>Page Content</h1>
          </motion.div>
        );
      }
      \`\`\`

      ## Accessibility Considerations

      Remember that not all users want or can comfortably view animations:

      - Respect the prefers-reduced-motion media query
      - Ensure animations don't flash or pulse in ways that could trigger photosensitive conditions
      - Make sure important information isn't conveyed solely through animation

      ## Conclusion

      Playful animations can significantly enhance your UI when used thoughtfully. By following these principles and examples, you can create delightful experiences that guide users, provide feedback, and express your brand's personality without sacrificing performance or accessibility.

      Remember: the best animations are those that users barely notice but would miss if they were gone.
    `,
    image: "/placeholder.svg?height=600&width=1200",
    date: "April 15, 2023",
    readTime: "8 min read",
  },
  "blog-2": {
    title: "Color Theory for Pastel Designs",
    excerpt: "Explore the psychology and application of pastel color palettes in modern web design.",
    content: `
      # Color Theory for Pastel Designs

      Pastel colors have become increasingly popular in modern web design, offering a soft, approachable aesthetic that can make interfaces feel friendly and accessible. In this article, we'll explore the psychology behind pastel colors and how to effectively use them in your designs.

      ## What Are Pastel Colors?

      Pastel colors are created by adding white to any pure hue, resulting in a lighter, less saturated version of the color. They're characterized by their soft, muted appearance and are often described as soothing, gentle, or dreamy.

      Common pastel colors include:
      - Soft pink (often called "millennial pink")
      - Baby blue
      - Mint green
      - Lavender
      - Peach
      - Pale yellow

      ## The Psychology of Pastel Colors

      Each pastel color carries its own psychological associations:

      - **Pastel Pink**: Nurturing, sweet, romantic, youthful
      - **Pastel Blue**: Calming, trustworthy, serene
      - **Pastel Green**: Fresh, natural, peaceful, growth
      - **Pastel Purple**: Creative, nostalgic, dreamy
      - **Pastel Yellow**: Cheerful, optimistic, warm
      - **Pastel Orange/Peach**: Friendly, energetic, approachable

      The softness of pastels generally evokes feelings of gentleness and approachability, making them excellent choices for brands that want to appear friendly and non-intimidating.

      ## Creating Effective Pastel Color Palettes

      ### 1. Start with a Purpose

      Before selecting colors, consider what emotions and messages you want to convey. Are you designing for a children's app? A health and wellness platform? A creative portfolio? The purpose should guide your color choices.

      ### 2. Choose a Base Pastel

      Select a primary pastel color that best represents your brand or project's personality. This will serve as the foundation for your palette.

      ### 3. Build Harmony

      There are several approaches to building a harmonious pastel palette:

      - **Monochromatic**: Different tints and shades of the same pastel color
      - **Analogous**: Pastel colors that are adjacent on the color wheel
      - **Complementary**: Opposite pastel colors on the color wheel (these create a subtle contrast since pastels are already muted)
      - **Triadic**: Three pastel colors equally spaced around the color wheel

      ### 4. Consider Contrast

      One challenge with pastel palettes is maintaining sufficient contrast for readability and accessibility. Some strategies:

      - Use darker text on pastel backgrounds
      - Include one or two deeper colors in your palette for emphasis and contrast
      - Pay special attention to contrast ratios for text elements

      ## Practical Applications in Web Design

      ### Backgrounds and Containers

      Pastels work beautifully as background colors, creating a soft canvas for your content. They can also be used for cards, modals, and other container elements.

      ### Illustrations and Icons

      Pastel-colored illustrations and icons can add personality and warmth to your interface without overwhelming other elements.

      ### Call-to-Action Elements

      While pastels might not create the same visual impact as vibrant colors, they can still be effective for buttons and other interactive elements, especially when combined with subtle hover animations.

      ### Gradients

      Pastel gradients can create dreamy, ethereal effects that add depth to your design without being distracting.

      ## Implementation Example

      Here's a simple example of how to implement a pastel color scheme in CSS:

      \`\`\`css
      :root {
        --pastel-pink: #ffd6e0;
        --pastel-blue: #d6f5ff;
        --pastel-yellow: #fff6d6;
        --pastel-green: #d6ffed;
        --pastel-purple: #e9d6ff;
        --text-dark: #333333;
        --text-medium: #666666;
      }

      body {
        background-color: var(--pastel-blue);
        color: var(--text-dark);
        font-family: sans-serif;
      }

      .card {
        background-color: var(--pastel-pink);
        padding: 20px;
        border-radius: 15px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
      }

      .button {
        background-color: var(--pastel-purple);
        color: var(--text-dark);
        border: none;
        padding: 10px 20px;
        border-radius: 20px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      .button:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
      \`\`\`

      ## Conclusion

      Pastel colors offer a versatile, approachable palette for modern web design. When used thoughtfully, they can create interfaces that feel friendly, calming, and professional. By understanding color theory and applying pastels with purpose, you can create designs that not only look beautiful but also effectively communicate your brand's personality and message.

      Remember that while trends come and go, the principles of good design remain constant. Use pastels not just because they're popular, but because they serve your specific design goals and enhance the user experience.
    `,
    image: "/placeholder.svg?height=600&width=1200",
    date: "March 22, 2023",
    readTime: "10 min read",
  },
  // Add more blog posts as needed
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts[params.id as keyof typeof blogPosts]

  if (!post) {
    return (
      <div className="page-container text-center py-16">
        <h1 className="section-title">Post Not Found</h1>
        <p className="text-muted-foreground mb-8">Sorry, the blog post you're looking for doesn't exist.</p>
        <Link href="/blog" className="primary-button">
          Back to Blog
        </Link>
      </div>
    )
  }

  // Convert markdown-like content to JSX
  // This is a simple implementation - in a real app, you'd use a markdown parser
  const contentJsx = post.content.split("\n\n").map((paragraph, index) => {
    if (paragraph.startsWith("# ")) {
      return (
        <h1 key={index} className="text-3xl font-bold my-6">
          {paragraph.substring(2)}
        </h1>
      )
    } else if (paragraph.startsWith("## ")) {
      return (
        <h2 key={index} className="text-2xl font-bold my-5">
          {paragraph.substring(3)}
        </h2>
      )
    } else if (paragraph.startsWith("### ")) {
      return (
        <h3 key={index} className="text-xl font-bold my-4">
          {paragraph.substring(4)}
        </h3>
      )
    } else if (paragraph.startsWith("- ")) {
      return (
        <ul key={index} className="list-disc pl-6 my-4">
          {paragraph.split("\n").map((item, i) => (
            <li key={i} className="mb-2">
              {item.substring(2)}
            </li>
          ))}
        </ul>
      )
    } else if (paragraph.startsWith("1. ")) {
      return (
        <ol key={index} className="list-decimal pl-6 my-4">
          {paragraph.split("\n").map((item, i) => {
            const match = item.match(/^\d+\.\s(.+)$/)
            return match ? (
              <li key={i} className="mb-2">
                {match[1]}
              </li>
            ) : null
          })}
        </ol>
      )
    } else if (paragraph.startsWith("```")) {
      const lines = paragraph.split("\n")
      const language = lines[0].substring(3)
      const code = lines.slice(1, -1).join("\n")
      return (
        <div key={index} className="my-6 rounded-xl overflow-hidden">
          <div className="bg-foreground/10 px-4 py-2 text-sm font-mono">{language}</div>
          <pre className="bg-foreground/5 p-4 overflow-x-auto">
            <code className="text-sm font-mono">{code}</code>
          </pre>
        </div>
      )
    } else {
      return (
        <p key={index} className="my-4 text-muted-foreground">
          {paragraph}
        </p>
      )
    }
  })

  return (
    <div className="page-container">
      <Link
        href="/blog"
        className="inline-flex items-center text-primary-foreground font-medium hover:underline mb-8 group"
      >
        <ArrowLeft size={16} className="mr-1 transition-transform group-hover:-translate-x-1" />
        Back to Blog
      </Link>

      <div className="max-w-3xl mx-auto">
        <div className="relative w-full h-64 md:h-96 mb-8 overflow-hidden rounded-3xl">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{post.title}</h1>

        <div className="flex items-center text-muted-foreground mb-8">
          <div className="flex items-center mr-6">
            <Calendar size={16} className="mr-2" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-2" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <div className="prose max-w-none">{contentJsx}</div>

        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="text-xl font-bold mb-4 text-foreground">Share this post</h3>
          <div className="flex space-x-4">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-primary/20 transition-colors duration-300"
              aria-label="Share on Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-primary/20 transition-colors duration-300"
              aria-label="Share on Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-primary/20 transition-colors duration-300"
              aria-label="Share on LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
