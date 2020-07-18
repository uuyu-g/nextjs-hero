import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Hero } from "../Hero";
import { RootState } from "../../store";
import * as heroService from "../heroService";
import { messageAction } from "./messageSlice";
import { HEROES } from "../../api/mock-heroes";

type State = {
  heroes: Hero[];
  currentHero: Hero | null;
};

const initialState: State = {
  heroes: [],
  currentHero: null,
};

export const loadHeroes = createAsyncThunk(
  "hero/loadHeroes",
  async (_, thunk) => {
    return await heroService.getHeroes().then((res) => {
      thunk.dispatch(messageAction.add("hero: fetched heroes"));
      return res;
    });
  }
);

export const loadHero = createAsyncThunk(
  "hero/loadHero",
  async (id: number, thunk) => {
    return await heroService.getHero(id).then((res) => {
      thunk.dispatch(messageAction.add(`hero: fetched hero id=${id}`));
      return res;
    });
  }
);

export const addHero = createAsyncThunk(
  "hero/addHero",
  async (newHero: Hero, thunk) => {
    return await heroService.addHero(newHero).then((res) => {
      thunk.dispatch(messageAction.add(`hero: add hero id=${newHero.id}`));
      return res;
    });
  }
);

export const updateHero = createAsyncThunk(
  "hero/updateHero",
  async (hero: Hero, thunk) => {
    return await heroService.updateHero(hero).then((res) => {
      thunk.dispatch(messageAction.add(`hero: update hero id=${hero.id}`));
      return res;
    });
  }
);

export const deleteHero = createAsyncThunk(
  "hero/deleteHero",
  async (hero: Hero, thunk) => {
    return await heroService.deleteHero(hero).then((res) => {
      thunk.dispatch(messageAction.add(`hero: delete hero id=${hero.id}`));
      return res;
    });
  }
);

export const searchHeroes = createAsyncThunk(
  "hero/updateHero",
  async (term: string, thunk) => {
    return await heroService.searchHeroes(term).then((res) => {
      thunk.dispatch(
        messageAction.add(
          `hero: serched heroes ${res.map(({ name }) => name).join(",")}`
        )
      );
      return res;
    });
  }
);

const heroSlice = createSlice({
  name: "hero",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // add
      .addCase(addHero.fulfilled, (state, action) => {
        state.heroes.push(action.payload);
      })

      // loadHeroes
      .addCase(loadHeroes.fulfilled, (state, action) => {
        state.heroes = action.payload;
      })

      // loadHero
      .addCase(loadHero.fulfilled, (state, action) => {
        state.currentHero = action.payload;
      })

      // update
      .addCase(updateHero.fulfilled, (state, action) => {
        const index = state.heroes.findIndex(
          (hero) => hero.id === action.payload.id
        );
        if (index >= 0) {
          const hero = state.heroes[index];
          hero.name = action.payload.name;
        }
      })

      // deleteHero
      .addCase(deleteHero.fulfilled, (state, action) => {
        const index = HEROES.findIndex((hero) => hero.id === action.payload.id);
        state.heroes.splice(index, 1);
      });
  },
});

export const selectHeroes = (state: RootState) => state.hero.heroes;
export const selectCurrentHero = (state: RootState) => state.hero.currentHero;

export default heroSlice.reducer;
