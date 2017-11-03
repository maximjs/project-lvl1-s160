#!/usr/bin/env node
import { description, questionAndAnswer } from '../games/brain-even';
import gameEngine from '..';

gameEngine(description, questionAndAnswer);
