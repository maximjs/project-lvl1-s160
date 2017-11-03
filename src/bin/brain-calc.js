#!/usr/bin/env node
import { description, questionAndAnswer } from '../games/brain-calc';
import gameEngine from '..';

gameEngine(description, questionAndAnswer);
