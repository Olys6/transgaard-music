import './App.css';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";

function App() {

  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <span style={{ fontSize: "3em" }}>Hello my name is Transgard</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={1}>
        <Animator animation={ZoomInScrollOut}>
          <span style={{ fontSize: "3em" }}>Let me show you some music</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={2}>
        <Animator animation={FadeUp}>
          <iframe title="transgaard skull song" style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/track/1w82rZYBodJxqoqnpBQFGk?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </Animator>
      </ScrollPage>
      <ScrollPage page={3}>
        <div>
          <span style={{ fontSize: "3em" }}>
            <Animator animation={MoveIn(-1000, 0)}>Hello Guys ??</Animator>
            <Animator animation={MoveIn(1000, 0)}>Nice to meet you ??‍♀️</Animator>- I'm Seonghyeok -
            <Animator animation={MoveOut(1000, 0)}>Good bye ✋?</Animator>
            <Animator animation={MoveOut(-1000, 0)}>See you ?</Animator>
          </span>
        </div>
      </ScrollPage>
      <ScrollPage page={4}>
        <Animator animation={batch(Fade(), Sticky())}>
          <span style={{ fontSize: "3em" }}>Done</span>
          <span style={{ fontSize: "3em" }}>
            There's FadeAnimation, MoveAnimation, StickyAnimation, ZoomAnimation
          </span>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default App;
