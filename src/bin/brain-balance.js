#!/usr/bin/env node
import { description, questionAndAnswer } from '../games/brain-balance';
import gameEngine from '..';

gameEngine(description, questionAndAnswer);
