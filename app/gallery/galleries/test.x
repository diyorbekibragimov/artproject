# FILEPATH: wrap_lines_to_html.py

text = """
 Oh, my sigh, my tears have become the night&apos;s prisoner 
              In clouds that no longer respond to those who come Has the abode of villains
              invaded the sanctuary? Or have the homelands wept? How much you
              make us weep My call fled as a lover from the purity of my land Oh
              horses! Have you dishonored yourselves? Or did you not hear us?
              Death condensed my call in the tenderness of a line And my pen
              screamed from its silence, where is the world? Have they started
              devouring flesh alive Watching my children being killed, torn
              apart Or have they been frightened by treacherous planes By Allah,
              the enemies have departed defeated In their graves, the blood of
              sacrifice cried out The dawn of victory shone, our banners sang In
              Gaza, there is no dawn, no cities for them Not even the tents of
              humiliation shelter us My tears fall, wiping the cheeks of the
              people There is no longer a nation or leaders on the earth Only
              they, who crafted loyalty, have a homeland Palestine, their
              mother, guides and honors us Write about our children, saddle our
              horses And write about my pride, you shall remain undefeated Is it
              enough for you, my tears, to write poetry? Have you borne fruit,
              or are you still screaming? The free did not hear the echoes of
              your silence Humiliation has engulfed them, so calm down And woe
              to the Arabs if they extend their hands No wealth will quench the
              earth for us to remain safe Come then, my tears, return to my ink
              for I shall not sleep As long as you, Gaza of the rebels, call out
              to us.
"""

wrapped_text = ""
current_line = ""

for char in text:
  if char.isupper():
    if current_line:
      wrapped_text += f"<p>{current_line.strip()}</p>\n"
      current_line = ""
  # skip char if it's a linebreak
  if char == "\n":
    continue
  else:
    current_line += char

if current_line:
  wrapped_text += f"<p>{current_line.strip()}</p>\n"

print(wrapped_text)
