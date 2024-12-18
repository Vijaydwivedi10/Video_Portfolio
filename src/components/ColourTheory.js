import React from 'react';
import '../css/ColourTheory.css'; // Import CSS file for styling
import ColourWheel from '../ImagesVideos/ColourWheel.png';
import BrandColours from '../ImagesVideos/BrandColours.png';

export default function ColourTheory() {
    return (
        <div className="colour-theory-container">
            <h2 className="colour-theory-title">Color Theory for Brands</h2>
            <p>
                Color is a powerful tool in branding, capable of evoking emotions, influencing perceptions, and enhancing recognition. 
                By carefully selecting and applying colors, brands can establish a strong and memorable identity that resonates with their target audience. 
                Understanding the basics of color theory can help you use color strategically to reinforce your brand's values and message.
            </p>

            <h3>The Basics of Color Theory</h3>
            <div className="image-text-wrapper">
                <img 
                    src={ColourWheel} 
                    alt="Color Wheel" 
                    className="colour-wheel-image"
                />
                <p>
                    Color theory revolves around the color wheel, a circular diagram representing relationships between colors. 
                    Colors are grouped into three main categories: primary, secondary, and tertiary colors.
                    <ul>
                        <li><strong>Primary Colors:</strong> These are the foundation of all other colors and include red, blue, and yellow.</li>
                        <li><strong>Secondary Colors:</strong> Created by mixing two primary colors, resulting in green, orange, and purple.</li>
                        <li><strong>Tertiary Colors:</strong> These are combinations of primary and secondary colors, offering a broader range of hues.</li>
                    </ul>
                    This framework helps designers understand how colors interact with each other. By using the color wheel, brands can create balanced and visually appealing combinations that enhance their brand's impact.
                </p>
            </div>

            <h3>The Psychology of Color</h3>
            <p>
                Colors evoke specific emotions and associations, making them crucial in branding. Each color carries a psychological meaning, which can influence how customers perceive your brand. Understanding the emotional impact of each color will help you choose the right palette for your brand:
            </p>
            <ul>
                <li><strong>Red:</strong> Associated with passion, energy, and urgency. It is often used by brands that want to evoke excitement or encourage action.</li>
                <li><strong>Blue:</strong> Represents trust, calmness, and professionalism. Many corporate and tech companies use blue to establish credibility and reliability.</li>
                <li><strong>Yellow:</strong> Signifies optimism, warmth, and attention-grabbing. It is ideal for brands looking to appear friendly and inviting.</li>
                <li><strong>Green:</strong> Connected to nature, health, and sustainability. Green is commonly used by eco-friendly brands or companies related to health and wellness.</li>
                <li><strong>Purple:</strong> Reflects luxury, creativity, and wisdom. It is often used by brands aiming for a premium or artistic appeal.</li>
                <li><strong>Orange:</strong> Represents enthusiasm, playfulness, and affordability. It is often used by brands targeting younger audiences or promoting fun, approachable products.</li>
                <li><strong>Black:</strong> Symbolizes elegance, sophistication, and power. Many luxury brands use black to convey exclusivity and high status.</li>
            </ul>

            <p>
                Keep in mind that cultural differences may influence how colors are perceived in different regions. For example, white may signify purity in some cultures but mourning in others. 
                Therefore, understanding your target audience's cultural background is important when selecting colors.
            </p>

            <h3>Choosing the Right Color Palette</h3>
            <div className="image-text-wrapper">
                
                <ul>
                    <li><strong>Know your audience:</strong> Your target audience plays a significant role in color selection. For example, younger audiences may gravitate towards vibrant and playful colors, while a more professional audience might prefer muted and sophisticated tones.</li>
                    <li><strong>Consider your competitors:</strong> Avoid using colors that are too similar to your competitors' branding, as this can cause confusion. Stand out by choosing a distinctive color that still aligns with your brand message.</li>
                    <li><strong>Use a primary and secondary color:</strong> Most brands have a primary color that is prominently featured, along with secondary and accent colors that support and complement it. Your primary color should be the most recognizable and associated with your brand.</li>
                    <li><strong>Test color combinations:</strong> Ensure that your chosen colors work well together in various contexts, including print, digital media, and product packaging. Colors should maintain legibility and consistency across all formats.</li>
                </ul>
                <img 
                    src={BrandColours} 
                    alt="Brand Colours" 
                    className="brand-colours-image"
                />
            </div>

            <h3>Application in Branding</h3>
            <p>
                Once you've selected your color palette, it's important to apply it consistently across all brand elements. Consistency helps to reinforce brand recognition and create a cohesive visual identity. 
                Whether it's your logo, website, social media profiles, or marketing materials, maintaining the same color scheme across all platforms ensures a strong and unified brand presence. 
                Additionally, you can experiment with using your colors strategically to evoke specific emotions or guide customer behavior. For instance, using red on a "Buy Now" button can encourage urgency, while blue can create a calming effect for informational sections.
            </p>

            <h3>Practical Tips for Brand Color Consistency</h3>
            <p>
                Maintaining color consistency is key to building a recognizable brand. Here are some practical tips for ensuring your colors are used effectively:
            </p>
            <ul>
                <li><strong>Create a style guide:</strong> Develop a brand style guide that includes detailed specifications for how your colors should be used across various mediums. This guide can include the exact HEX, RGB, or CMYK codes for digital and print use.</li>
                <li><strong>Use color contrasts wisely:</strong> When designing with multiple colors, ensure that there is sufficient contrast between text and background colors to maintain readability. For example, light text on a dark background or vice versa.</li>
                <li><strong>Test for accessibility:</strong> Ensure that your color palette meets accessibility standards for visually impaired users. Use tools to check color contrast ratios and avoid combinations that may be hard to distinguish.</li>
                <li><strong>Monitor how colors appear on different devices:</strong> Colors can appear differently depending on the screen type and calibration. Test your brand colors on various devices and adjust them to ensure a consistent appearance.</li>
            </ul>

            <h3>Conclusion</h3>
            <p className="conclusion">
                Mastering color theory is essential for creating a powerful and recognizable brand identity. By understanding how colors influence emotions and perceptions, you can choose the right palette that reflects your brand values and resonates with your target audience. 
                Remember, consistency is key—applying your color palette uniformly across all branding elements will help build a strong and lasting brand presence.
            </p>
        </div>
    );
}
