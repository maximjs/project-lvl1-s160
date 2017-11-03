#!/usr/bin/env node
import { description, questionAndAnswer } from '../games/brain-gcd';
import gameEngine from '..';

gameEngine(description, questionAndAnswer);
